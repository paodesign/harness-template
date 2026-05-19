# Cursor — Override de Plataforma

> Extensiones especificas para trabajar con el arnes en Cursor IDE.
> Estas reglas complementan AGENTS.md, nunca lo contradicen.

---

## Configuracion

Cursor lee AGENTS.md como archivo de contexto del proyecto. Si usabas `.cursorrules`, AGENTS.md es el reemplazo recomendado.

- Proyecto: `AGENTS.md` en la raiz (auto-detectado)
- Overrides especificos: `.cursor/rules/`

## Workflow Manual

Sin slash commands nativos. Usar prompts directos:

```
"Lee task.md y dame el estado actual del proyecto"
"Rol Builder: genera el componente hero segun context.md"
"Rol Tester: ejecuta los 9 tests sobre dist/"
"Actualiza task.md y changelog.md con los cambios de esta sesion"
```

## Limitaciones

- Sin browser agent → Test 04, 07 y 09 se ejecutan manualmente o con scripts
- Sin artifacts → Previews y diagramas se generan como archivos en dist/
- Sin turbo mode → Cada accion requiere aprobacion
