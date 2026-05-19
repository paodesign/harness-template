# Linter Rules

## CSS / SCSS
- Cero valores hex inline. Solo tokens (`var(--...)`).
- Cero `!important` salvo override documentado con comentario.
- Cero magic numbers en spacing. Usar tokens `--sp-*`.
- Cero `position: absolute` sin un `position: relative` padre explícito.

## HTML
- Cada `<img>` con `alt` (vacío permitido solo en decorativas).
- Cada `<button>` con tipo explícito.
- Cero `<div onClick>`. Eventos en elementos semánticos.

## JS / TS
- Cero `console.log` en producción.
- Cero claves API o tokens hardcodeados (regex check: `[A-Za-z0-9]{32,}`).
- Async/await sobre callbacks anidados.
