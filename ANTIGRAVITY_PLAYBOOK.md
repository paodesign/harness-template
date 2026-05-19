# Antigravity Playbook — UX Harness v3.3

Cómo correr el ciclo 1 del arnés sobre el proyecto **sereno-yoga** usando
Antigravity y su Agent Manager (Cmd+E). Tiempo estimado: 30–45 min.

---

## 0. Prerequisitos

- Antigravity instalado y workspace creado.
- Este folder (`ux-harness/`) descomprimido dentro del workspace de Antigravity.
- Modelo recomendado por agente: Claude Sonnet 4.6 (Builder, Writer, Walker)
  y Claude Opus 4.6 o Gemini 3 Pro Thinking (Tester).
  El Tester se beneficia más del modelo grande porque es el que más razona.

## 1. Cargar el workspace

Abrí Antigravity. File → Open Folder → seleccioná la carpeta `ux-harness/`.
Verificá que ves estos archivos en el explorador:

```
agents/                — los 4 prompts
core/                  — ADN del sistema (design-system, voice-guide)
quality/               — 14 reglas de calidad
templates/             — plantillas reutilizables
projects/sereno-yoga/  — el proyecto a correr
```

## 2. Spawn de los 4 agentes

Cmd+E abre el Agent Manager. Vas a crear **4 agentes**, uno por cada rol.
Cada uno se carga con su prompt como system message y queda esperando inputs.

### Agente 1 — Builder
- Click "New Agent" → nombrá `Builder`
- Modelo: Claude Sonnet 4.6
- System prompt: pegá el contenido completo de `agents/builder.prompt.md`
- Primer mensaje (cuando lo arranques): *"Builder v1.0.0 — ciclo 1. Cargá los inputs de projects/sereno-yoga."*

### Agente 2 — Tester
- Nombre: `Tester`
- Modelo: Claude Opus 4.6 (o Gemini 3 Pro Thinking)
- System prompt: `agents/tester.prompt.md`
- Primer mensaje: *"Tester v2.1.0 — ciclo 1. Validá projects/sereno-yoga/context.md contra templates/context.schema.json."*

### Agente 3 — Writer
- Nombre: `Writer`
- Modelo: Claude Sonnet 4.6
- System prompt: `agents/writer.prompt.md`
- Primer mensaje: *"Writer v1.0.0 — ciclo 1. Generá content.json para projects/sereno-yoga usando core/voice-guide.md y quality/states-spec.md."*

### Agente 4 — Walker
- Nombre: `Walker`
- Modelo: Claude Sonnet 4.6
- System prompt: `agents/walker.prompt.md`
- Primer mensaje (al final del ciclo): *"Walker v1.0.0 — ciclo 1. Simulá las personas declaradas en projects/sereno-yoga/context.md sobre el dist actual."*

## 3. Orquestación del ciclo 1 (vos sos el coordinador)

Antigravity NO conecta los agentes entre sí — vos pasás los archivos en
secuencia. Seguí estas 8 fases en orden:

### Fase 1 — Ingesta (Builder)
Disparás al Builder. Debería listar los inputs que ve y declarar que
está esperando un context validado.

### Fase 2 — Validación (Tester)
Disparás al Tester. Verifica `context.md` vs schema. Esperá output:
`PASS` o `FAIL` con detalle. Si FAIL, corregís el context y reiniciás
desde fase 2. **Sin PASS, no pasás a fase 3.**

### Fase 3 — Contenido (Writer)
Disparás al Writer. Output esperado: `projects/sereno-yoga/dist/content.json`
con los 5 estados para cada componente.

✅ **Check humano rápido:** abrí el content.json. Pregunta:
*¿Suena como Sereno Yoga (voice-guide) o suena genérico?* Si suena
genérico, el voice-guide o el prompt del Writer necesitan ajuste. No
sigas a fase 4 todavía.

### Fase 4 — Producción (Builder)
Disparás al Builder con instrucción: *"Generá src/ y dist/ consumiendo
dist/content.json. Resolvé los 5 estados por componente."*

Output esperado: HTML/CSS/JS en `src/` y build en `dist/`.

### Fase 5 — Auditoría técnica (Tester)
Disparás al Tester con: *"Ejecutá los 14 tests sobre dist/."*

Output esperado:
- `dist/test-report.json` (machine-readable)
- `dist/audit-summary.md` (legible)

✅ **Check humano:** leé el `audit-summary.md`. Si hay FAILs bloqueantes,
volvés a fase 4 con el reporte. **Máximo 5 vueltas** o salta el Circuit Breaker.

### Fase 6 — Auditoría heurística (Walker)
Disparás al Walker. Output: `dist/walkthrough-report.md` con P1/P2/P3.

### Fase 7 — Validación humana (vos)
Leés `audit-summary.md` + `walkthrough-report.md` + abrís el dist real.
Completás `projects/sereno-yoga/feedback.md` con tu decisión.

### Fase 8 — Cierre
Si firmaste approve:
- El Builder copia los tests pasados a `dist/regression-baseline.json`.
- Sumás +1 a `metrics/system-metrics.json:total_projects`.
- Cerrás los agentes en Antigravity.

Si pediste cambios → el Builder hace un nuevo ciclo y vuelve a fase 4.

---

## 4. Qué mirar durante el primer test

Estas son las grietas más probables del ciclo 1. No las arregles
inmediatamente — anotalas para evolucionar el arnés a v3.4.

1. **Writer demasiado genérico.** Síntoma: el content.json suena a
   cualquier marca. Causa típica: voice-guide.md no tiene suficientes
   ejemplos "bueno vs malo". Solución: agregar 5–8 ejemplos más.

2. **Tester laxo o estricto.** Síntoma: pasa cosas obvias o falla cosas
   triviales. Causa: el prompt del Tester necesita criterio más explícito
   por test. Ajustar `agents/tester.prompt.md`.

3. **Walker muy diplomático.** Síntoma: dice que "casi todo bien".
   Causa: el prompt no le exige reportar bloqueantes. Reforzar la regla
   "sos honesto, no diplomático".

4. **Ciclos infinitos en fase 4–5.** Síntoma: el Builder corrige una cosa
   y rompe otra. Causa: brief ambiguo en context.md. Es la señal correcta
   del Circuit Breaker.

5. **Estados omitidos.** Síntoma: el Builder hace solo `idle` y dice "los
   otros son obvios". Causa: el prompt necesita reforzar "los 5 estados
   son obligatorios siempre".

---

## 5. Cómo ajustar entre ciclos

Si algo falla, ajustá en este orden de prioridad:

1. **context.md del proyecto** — 70% de los problemas son brief ambiguo.
2. **voice-guide.md / design-system.md** — si el copy o lo visual no encaja.
3. **El prompt del agente** que falló — solo si los pasos 1 y 2 no resuelven.
4. **El schema** — última opción, cambiar el schema invalida proyectos pasados.

Cada vez que tocás un prompt de agente, subí su versión en `agents/agents-version.json` y dejá nota en el changelog del proyecto.

---

## 6. Checklist rápido pre-arranque

- [ ] `ux-harness/` abierto en Antigravity
- [ ] 4 agentes creados con sus prompts cargados
- [ ] `core/voice-guide.md` revisado (¿realmente suena a Sereno Yoga?)
- [ ] `core/design-system.md` revisado (¿los tokens te convencen?)
- [ ] `projects/sereno-yoga/context.md` leído de punta a punta
- [ ] `projects/sereno-yoga/.env` con valores ficticios pero no vacíos
- [ ] Tenés 45 minutos seguidos para el primer ciclo

Cuando estos seis estén tildados, arrancá por la fase 1.
