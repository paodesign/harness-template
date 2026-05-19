# UX Harness v3.3 — Pack para Antigravity

Pack listo para correr el primer ciclo del arnés en Antigravity sobre un
caso concreto: **Sereno Yoga**, una landing de reserva de clases.

## Por dónde empezar
1. Leé `ANTIGRAVITY_PLAYBOOK.md` — guía paso a paso para Antigravity.
2. Revisá `core/voice-guide.md` y `core/design-system.md` (ya están rellenados
   con la identidad de Sereno Yoga; tocalos si querés cambiar el caso).
3. Abrí `projects/sereno-yoga/context.md` para entender el brief.
4. Seguí las 8 fases del playbook.

## Estructura

```
ux-harness/
├── ANTIGRAVITY_PLAYBOOK.md   ← empezá acá
├── README.md
├── agents.md
├── agents/                   ← 4 prompts ejecutables
│   ├── builder.prompt.md
│   ├── tester.prompt.md
│   ├── writer.prompt.md
│   ├── walker.prompt.md
│   └── agents-version.json
├── core/                     ← ADN (rellenado para Sereno Yoga)
│   ├── design-system.md
│   ├── ux-principles.md
│   ├── responsive-spec.md
│   └── voice-guide.md
├── quality/                  ← 14 reglas + heurísticas
├── templates/                ← plantillas reutilizables
├── metrics/                  ← telemetría global del sistema
└── projects/
    └── sereno-yoga/          ← el caso de prueba
        ├── context.md
        ├── .env
        ├── changelog.md
        ├── src/   dist/   assets/
```

## Reglas inmutables
- Builder no genera copy → consume content.json.
- Writer no toca código.
- Tester es read-only.
- Walker reporta percepción, no errores técnicos.
- Sin `context.md` válido contra schema, el Builder no arranca.
- 5 ciclos sin progreso → Circuit Breaker.
