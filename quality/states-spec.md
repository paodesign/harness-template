# States Spec — Cobertura obligatoria por componente

Toda vista o componente interactivo debe resolver los 5 estados.

## 1. idle
Estado base, sin acción del usuario.
- Jerarquía visual clara, CTA principal evidente.

## 2. loading
Datos en tránsito.
- Skeleton o spinner. Sin layout shift (CLS).
- Timeout > 8s → pasa a error.

## 3. empty
Sin datos para mostrar (legítimo, no error).
- Explica el porqué (no asuma que el usuario sabe).
- Sugiere la acción para salir del vacío.

## 4. error
Falla técnica o de validación.
- Mensaje accionable, no genérico.
- Ruta de recuperación visible (reintentar, contactar, etc.).
- Nunca culpa al usuario.

## 5. success
Acción completada.
- Confirmación visible (toast, inline, redirect con feedback).
- Próximo paso sugerido si lo hay.

## Declaración de exclusión
Si un componente no necesita un estado (ej: un footer no tiene loading),
el Writer lo declara explícitamente en `content.json`:

```json
"Footer": { "loading": { "_not_applicable": "componente estático" } }
```
