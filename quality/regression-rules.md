# Regression Rules

## Cómo se construye el baseline
Al cerrar exitosamente un ciclo (Tester PASS + Humano approve), el set de
tests que pasaron se persiste en `dist/regression-baseline.json`.

## Cómo se aplica el Test 10
En todo ciclo > 1, el Tester:
1. Carga `regression-baseline.json`.
2. Por cada test del baseline, verifica que siga pasando.
3. Cualquier regresión = FAIL bloqueante, severidad máxima.

## Excepciones
Un test puede salir del baseline solo si:
- El humano lo aprueba explícitamente en `feedback.md` con razón.
- Se actualiza el `context.md` documentando el cambio de scope.
