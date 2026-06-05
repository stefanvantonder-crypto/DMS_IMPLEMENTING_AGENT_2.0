from pathlib import Path
import json
import shutil


PROJECT_ROOT = Path(__file__).resolve().parents[1]
REGISTRY_PATH = PROJECT_ROOT / "engine" / "output_registry.json"
SOURCE_ROOT = PROJECT_ROOT / "dms-ui" / "backend" / "templates"


def load_documents():
    with REGISTRY_PATH.open("r", encoding="utf-8") as file:
        registry = json.load(file)

    documents = registry.get("documents", [])
    if not isinstance(documents, list):
        raise ValueError("Registry must contain a documents list")

    return documents


def iter_templates(document):
    if isinstance(document.get("templates"), list):
        for template in document["templates"]:
            if isinstance(template, dict):
                yield template
        return

    legacy_path = document.get("template")
    if legacy_path:
        extension = Path(legacy_path).suffix.lower()
        yield {
            "name": "Default",
            "path": legacy_path,
            "type": extension,
            "role": "primary" if extension == ".docx" else "supporting",
        }


def find_source_file(filename):
    matches = [
        path
        for path in SOURCE_ROOT.rglob(filename)
        if path.is_file() and path.name == filename
    ]
    return matches[0] if matches else None


def main():
    documents = load_documents()
    copied = []
    created_folders = []
    missing = []
    present = set()
    total_templates = 0
    primary_templates = 0
    supporting_templates = 0

    for document in documents:
        for template in iter_templates(document):
            total_templates += 1
            template_path = template.get("path")
            template_type = (template.get("type") or Path(str(template_path)).suffix).lower()
            role = template.get("role")

            if role == "primary" and template_type == ".docx":
                primary_templates += 1
            else:
                supporting_templates += 1

            if not template_path:
                missing.append({"key": document.get("key", ""), "template": ""})
                continue

            target_path = PROJECT_ROOT / template_path

            if target_path.exists():
                present.add(template_path)
                continue

            source_path = find_source_file(target_path.name)
            if not source_path:
                missing.append({"key": document.get("key", ""), "template": template_path})
                continue

            target_folder = target_path.parent
            if not target_folder.exists():
                target_folder.mkdir(parents=True, exist_ok=True)
                created_folders.append(str(target_folder))

            if not target_path.exists():
                shutil.copy2(source_path, target_path)
                copied.append(str(target_path))
                present.add(template_path)

    for document in documents:
        for template in iter_templates(document):
            template_path = template.get("path")
            if template_path and (PROJECT_ROOT / template_path).exists():
                present.add(template_path)

    result = {
        "files_copied": copied,
        "folders_created": sorted(set(created_folders)),
        "validation": {
            "total_templates": total_templates,
            "templates_now_present": len(present),
            "primary_templates": primary_templates,
            "supporting_templates": supporting_templates,
            "remaining_missing": len(missing),
        },
        "remaining_missing_templates": missing,
        "errors": [],
    }

    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
