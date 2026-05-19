# Agents — Overview

| ID | Agente | Rol            | Prompt                       | Output principal           |
|----|--------|----------------|------------------------------|----------------------------|
| 1  | Builder| Productor      | agents/builder.prompt.md     | /src, /dist                |
| 2  | Tester | Auditor técnico| agents/tester.prompt.md      | test-report.json + audit   |
| 3  | Writer | Contenidista   | agents/writer.prompt.md      | dist/content.json          |
| 4  | Walker | Auditor UX     | agents/walker.prompt.md      | dist/walkthrough-report.md |

Separación estricta: ningún agente puede ejecutar el rol de otro.
