# GEMINI.md — Override Nativo Antigravity

> Este archivo extiende AGENTS.md con funciones especificas de Antigravity.
> AGENTS.md es la constitucion. Este archivo son los superpoderes de la plataforma.
> En caso de conflicto, GEMINI.md tiene prioridad.

---

## Prioridad de Contexto

1. Leer AGENTS.md como constitucion principal (reglas universales)
2. Aplicar este archivo como extensiones de plataforma
3. Al iniciar cualquier tarea, leer primero `projects/[cliente]/task.md`

## Protocolo de Inicio

Al abrir el proyecto, ejecutar automaticamente el workflow `/iniciar-sesion` para cargar el estado actual. Nunca empezar a producir sin contexto.

## Turbo Commands (auto-ejecucion segura)

Usar `// turbo` antes de comandos seguros para ejecucion automatica:
- Al guardar archivos en `src/`: ejecutar linting automatico
- Al marcar "Lista para auditoria": compilar a `dist/` automaticamente
- Validacion de secretos en pre-commit

## Browser Agent

Usar el browser integrado de Antigravity para:
- **Test 04 (Responsividad)**: Capturar screenshots en 375px, 640px y 1280px
- **Test 07 (Performance)**: Medir LCP y Core Web Vitals reales
- **Test 09 (Links)**: Navegar todos los enlaces y verificar que resuelvan
- Preview en tiempo real de componentes en `dist/`

## Artifacts

- Generar preview visual de componentes desde `src/`
- Reportes de test-report.json como artifacts navegables
- Diagramas de flujo desde `implementation_plan.md`
- El usuario puede comentar artifacts estilo Google Docs para dar feedback

## Modelo Preferido

- Default: Gemini 3 Pro para produccion y auditoria
- Alternativa: Claude Sonnet 4.6 / Opus 4.6 (disponibles en el dropdown de modelo)
- Usar Deep Think mode para decisiones arquitectonicas complejas

## Gobernanza Extendida

En Antigravity, el Emergency Stop se ejecuta con protecciones adicionales:
- Escaneo de secretos en pre-commit (bloquea push si detecta keys)
- Aislamiento de tenant: cada proyecto corre en su propio workspace
- Logs de auditoria por sesion visibles en el Agent Manager
