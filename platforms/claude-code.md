# Claude Code — Override de Plataforma

> Extensiones especificas para trabajar con el arnes en Claude Code (terminal).
> Estas reglas complementan AGENTS.md, nunca lo contradicen.

---

## Configuracion

Crear un `CLAUDE.md` en la raiz del proyecto que referencie AGENTS.md:

```markdown
# CLAUDE.md
Lee AGENTS.md como reglas maestras del proyecto.
Antes de cualquier tarea, carga: task.md del cliente activo + core/design-system.md
```

## Ventajas Nativas

- Acceso directo al filesystem: lee/escribe task.md, research.md, changelog.md
- Ejecucion de scripts: linters, validadores de accesibilidad, tests de performance
- Git nativo: puede commitear cambios al completar iteraciones
- Multi-archivo: genera y edita multiples archivos en una sesion

## Automatizacion

```bash
# Validar accesibilidad
npx axe dist/index.html

# Validar HTML
npx html-validate dist/

# Lighthouse
npx lighthouse dist/index.html --output json --output-path dist/lighthouse-report.json
```
