# UX Harness Framework v3.3 — Seed Pack

Este repositorio es el punto de partida para operar el arnés. Contiene:
- 4 agentes con prompts ejecutables (`/agents`)
- ADN del sistema (`/core`)
- Batería de calidad de 14 tests (`/quality`)
- Plantillas reutilizables (`/templates`)
- Telemetría global (`/metrics`)
- Un proyecto de ejemplo (`/projects/example-landing`)

## Cómo correr el primer ciclo

1. **Personalizá el ADN.** Editá `core/design-system.md` con tus tokens y
   `core/voice-guide.md` con la voz de tu marca o cliente.

2. **Definí un proyecto.** Copiá `templates/context.template.md` a
   `projects/[nombre]/context.md` y completalo. Validalo contra
   `projects/[nombre]/context.schema.json`.

3. **Corré los agentes en orden** (fases 1→8 del lifecycle):
   - Builder → carga core + context
   - Tester → valida brief contra schema
   - Writer → genera `content.json`
   - Builder → produce código consumiendo content.json
   - Tester → ejecuta tests 01–14
   - Walker → simula personas
   - Humano → revisa y firma `feedback.md`
   - Builder → cierra ciclo y actualiza baseline + metrics

Cada agente vive en `agents/[nombre].prompt.md`. Cargá ese prompt como
system prompt en tu LLM y pasale los archivos que su sección "Inputs" indica.

## Reglas inmutables

- El Builder NO genera copy (consume `content.json`).
- El Writer NO toca código.
- El Tester es read-only sobre `/src` y `/dist`.
- El Walker reporta percepción, no errores técnicos.
- Sin `context.md` válido contra schema, el Builder no arranca.
- Tras 5 ciclos sin progreso, el Circuit Breaker detiene el sistema.
