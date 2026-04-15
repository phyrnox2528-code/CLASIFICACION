from pathlib import Path
root = Path('src/components/ui')
for p in root.rglob('*.tsx'):
    text = p.read_text(encoding='utf-8')
    new = text
    # Adjust relative imports to shared ui root
    new = new.replace('from "./utils"', 'from "../utils"').replace("from './utils'", "from '../utils'")
    # Move button imports outside controls
    if 'ui\\controls\\' not in str(p):
        new = new.replace('from "./button"', 'from "../controls/button"').replace("from './button'", "from '../controls/button'")
    # Specific relocated imports
    if p.name == 'sidebar.tsx':
        new = new.replace('from "./input"', 'from "../controls/input"').replace("from './input'", "from '../controls/input'")
        new = new.replace('from "./sheet"', 'from "../overlays/sheet"').replace("from './sheet'", "from '../overlays/sheet'")
        new = new.replace('from "./tooltip"', 'from "../overlays/tooltip"').replace("from './tooltip'", "from '../overlays/tooltip'")
        new = new.replace('from "./separator"', 'from "../layout/separator"').replace("from './separator'", "from '../layout/separator'")
    if p.name == 'command.tsx':
        new = new.replace('from "./dialog"', 'from "../overlays/dialog"').replace("from './dialog'", "from '../overlays/dialog'")
    if new != text:
        p.write_text(new, encoding='utf-8')
        print(f'Updated {p}')
