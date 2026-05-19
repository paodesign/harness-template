# Antigravity — Override de Plataforma (Nativo)

> Este archivo documenta las funciones avanzadas de Antigravity.
> La configuracion activa de plataforma esta en `GEMINI.md` (raiz del proyecto).
> Ambos archivos complementan AGENTS.md, nunca lo contradicen.

---

## Funciones Nativas

### Agent Manager
- Orquestacion de los 3 agentes (Builder, Tester, Lead Architect)
- Multiples agentes corriendo en paralelo en conversaciones separadas
- Visualizacion de estado y artifacts producidos

### Turbo Commands
- Linting automatico al guardar en `src/`
- Compilacion a `dist/` al marcar "Lista para auditoria"
- Escaneo de secretos en pre-commit

### Browser Agent
- Preview en tiempo real de `dist/` en multiples breakpoints
- Screenshots automaticos para Test 04 (responsividad)
- Navegacion automatizada para Test 09 (links)
- Medicion real de LCP y Core Web Vitals para Test 07

### Artifacts
- Preview de componentes aislados desde `src/`
- Reportes de test-report.json como artifacts navegables
- Feedback estilo Google Docs sobre artifacts

### Workflows (Slash Commands)
Los workflows del arnes estan en `.agent/workflows/`:
- `/iniciar-sesion` — Carga estado y contextualiza
- `/planificar` — Lead Architect planifica o maneja re-ingesta
- `/investigar` — Investiga y documenta APIs en research.md
- `/producir` — Builder genera entregable
- `/auditar` — Tester ejecuta 9 tests

## Modelos Disponibles
- Gemini 3 Pro (default)
- Claude Sonnet 4.6 / Opus 4.6 (alternativa)
