---
description: Activa el Lead Architect para planificar un proyecto nuevo o manejar cambio de scope
---

1. Asumi el rol de **Lead Architect** segun las reglas de AGENTS.md.
2. Lee `projects/[cliente]/context.md` completo.
3. Valida el brief contra `context.schema.json`. Si faltan campos obligatorios, solicitalos antes de continuar.
4. Desglosa el context.md en un `implementation_plan.md` con:
   - Lista de entregables ordenados por prioridad
   - Dependencias entre entregables
   - Estimacion de complejidad (baja/media/alta) por entregable
5. Crea o actualiza `task.md` con todos los entregables, estados y hitos.
6. Si es un cambio de scope (re-ingesta):
   - Documenta que cambio en la seccion "Decisiones Tomadas" de task.md
   - Reinicia el ciclo desde la fase de validacion
   - No destruyas lo ya completado — solo ajusta lo pendiente
