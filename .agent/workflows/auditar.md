---
description: Ejecuta la bateria completa de 9 tests del Quality Gate sobre dist/
---

1. Asumi el rol de **Tester** segun las reglas de AGENTS.md. Evalua de forma independiente contra los estandares objetivos.
2. Carga las reglas de validacion:
   - `core/quality/linter-rules.md`
   - `core/quality/accessibility.md`
   - `core/quality/performance.md`
   - `core/quality/seo-metadata.md`
   - `core/quality/heuristics.json`
   - `core/design-system.md`
   - `core/responsive-spec.md`
3. Ejecuta los 9 tests en orden sobre `projects/[cliente]/dist/`:
   - 01: Integridad de Contexto y Secretos (sin API keys, .env, passwords en dist/)
   - 02: Validacion Semantica del Brief (context.md vs context.schema.json)
   - 03: Consistencia Visual (tokens respetados, sin hardcoded)
   - 04: Responsividad y Breakpoints (usa el browser integrado en 375px, 640px, 1280px)
   - 05: Accesibilidad WCAG 2.1 AA (contraste, alt-text, teclado, areas tactiles)
   - 06: Usabilidad y Flujo (heuristicas de Nielsen, UX writing)
   - 07: Performance y Peso (imagenes, CSS, JS, LCP — medi con el browser)
   - 08: SEO y Metadatos (title, description, OpenGraph, canonical, JSON-LD)
   - 09: Navegacion y Links (verifica con el browser que no haya 404 ni callejones sin salida)
4. Genera `projects/[cliente]/dist/test-report.json` con el formato definido en AGENTS.md.
5. Si todos los tests pasan: actualiza `changelog.md` y `task.md`, marca como "Completada".
6. Si alguno falla: genera reporte detallado con error, regla violada y sugerencia de correccion. Devolve al Builder.
7. Limite: si despues de 3 ciclos el mismo test sigue fallando, escala para revision manual.
