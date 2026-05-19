---
description: Genera un entregable como Builder siguiendo las reglas del arnes UX Harness
---

1. Asumi el rol de **Builder** segun las reglas de AGENTS.md.
2. Verifica que el `context.md` del cliente pase la validacion del `context.schema.json`. Si falta un campo obligatorio, detene la produccion y solicita la informacion faltante.
3. Consulta `research.md` antes de usar cualquier API o libreria externa. Si el recurso no esta documentado ahi, investiga y documentalo antes de usarlo en codigo.
4. Genera el codigo en `projects/[cliente]/src/` respetando estrictamente los tokens de `core/design-system.md`. Sin valores hardcodeados de colores, fuentes o espaciados.
5. Compila/copia el resultado final a `projects/[cliente]/dist/`.
6. Actualiza `task.md`: marca el entregable como "Lista para auditoria" y registra la sesion en el log.
7. Nunca marques nada como "Completada" — eso lo hace el Tester.
