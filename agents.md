# AGENTS.md — La Constitucion (Reglas Universales y Portables)

> Este archivo es el corazon del arnes. Funciona en cualquier entorno: Cursor, Claude Code, Antigravity, VS Code o cualquier herramienta agentica.
>
> Para configuracion especifica de plataforma, ver `platforms/[plataforma].md` o `GEMINI.md` si estas en Antigravity.

---

## Principio Rector

**El arnes no solo genera; valida, persiste y audita.** Ningun entregable sale sin pasar la bateria completa de tests. Ninguna sesion arranca sin leer el estado actual del proyecto.

---

## 1. Protocolo de Inicio de Sesion

Cada vez que un agente inicia una sesion de trabajo, **antes de cualquier otra accion**, debe:

1. Leer `projects/[cliente]/task.md` → Estado actual, tareas pendientes, hitos cumplidos
2. Leer `projects/[cliente]/context.md` → Brief y restricciones del cliente
3. Leer `core/design-system.md` → Tokens de diseno vigentes
4. Si existe, leer `projects/[cliente]/research.md` → Investigacion previa de APIs y dependencias

**Si `task.md` no existe**, el agente debe crearlo a partir del `context.md` antes de empezar a producir.

**Si `context.md` no pasa la validacion del schema**, el agente se detiene y solicita la informacion faltante.

---

## 2. Stack Tecnologico Base

### Convenciones de Codigo
- HTML semantico obligatorio (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- CSS con custom properties (variables) referenciando tokens del design-system
- JavaScript modular (ES modules), `const`/`let` unicamente, sin `var`
- Mobile-first: estilos base para mobile, media queries `min-width` ascendentes
- Sin estilos inline, sin JS inline, sin `!important` (excepto overrides de terceros documentados)

### Output Agnostico
Los agentes generan codigo en `src/` que es **logica pura del componente**. El formato de salida (HTML estatico, React, Vue, Astro, etc.) se define en el `context.md` del cliente bajo el campo `output_format`.

Si el `context.md` no especifica formato, el default es **HTML + CSS + JS vanilla**.

---

## 3. Roles de Agentes

### Agente 1: The Builder (Productor)

**Mandato**: Generar codigo funcional en `src/` y compilar el resultado en `dist/`.

**Reglas:**
- Validar que el `context.md` pase el schema antes de producir
- Consultar `research.md` antes de usar cualquier API o libreria externa
- Trabajar exclusivamente con tokens del `design-system.md`
- Actualizar `task.md` al completar cada tarea
- **No puede marcar tareas como "Completadas"** — solo como "Lista para auditoria"

**Habilidades integradas:**
- Content Design: Consistencia de UX Writing, voz de marca, microcopy
- Research: Investiga y documenta en `research.md` antes de usar recursos externos

### Agente 2: The Tester (Auditor)

**Mandato**: Ejecutar la bateria completa de 9 tests sobre `dist/`.

**Reglas:**
- Ejecutar los 9 tests en orden
- Generar `projects/[cliente]/dist/test-report.json`
- Si todos pasan: marcar como "Completada", actualizar `changelog.md` y `task.md`
- Si falla: generar reporte detallado con error, regla violada y sugerencia
- **Limite**: 3 ciclos de correccion antes de escalar

### Agente 3: Lead Architect (Orquestador)

**Mandato**: Se activa al inicio de proyectos o ante cambio de scope.

**Cuando se activa:**
- Proyecto nuevo
- Cambio de brief o scope
- Escalamiento del Tester por fallo repetido
- Falta de claridad en prioridades

**Output:** `implementation_plan.md` + `task.md` actualizado

---

## 4. The Quality Gate: 9 Tests Obligatorios

| # | Test | Archivo de Reglas | Bloquea |
|---|------|-------------------|---------|
| 01 | Integridad de Contexto y Secretos | `context.schema.json` + secretos | Si |
| 02 | Validacion Semantica del Brief | `context.schema.json` | Si |
| 03 | Consistencia Visual | `design-system.md` | Si |
| 04 | Responsividad y Breakpoints | `responsive-spec.md` | Si |
| 05 | Accesibilidad (WCAG 2.1 AA) | `accessibility.md` | Si |
| 06 | Usabilidad y Flujo | `heuristics.json` | Si |
| 07 | Performance y Peso | `performance.md` | Si |
| 08 | SEO y Metadatos | `seo-metadata.md` | Si |
| 09 | Navegacion y Links | Prueba funcional | Si |

---

## 5. Emergency Stop

El arnes **detiene inmediatamente** cualquier ejecucion si:

1. **Secretos expuestos**: API keys, tokens o passwords en `dist/`
2. **Cruce de datos**: Informacion de un cliente en el directorio de otro
3. **Brief ambiguo**: Restricciones no claras — mejor preguntar que alucinar
4. **Dependencia no verificada**: API o libreria no documentada en `research.md`

---

## 6. Persistencia: El Patron Blackboard

- **task.md**: Memoria operativa. Se lee al iniciar, se actualiza al cerrar.
- **research.md**: Blueprint tecnico de APIs y dependencias verificadas.
- **changelog.md**: Historial de versiones con hash y timestamp.

---

## 7. Lifecycle

| Fase | Agente | Accion | Output |
|------|--------|--------|--------|
| 1. Planificacion | Lead Architect | Desglosa context.md | implementation_plan.md + task.md |
| 2. Validacion | Tester | context.md vs schema | Brief validado |
| 3. Research | Builder | Investiga APIs y deps | research.md |
| 4. Produccion | Builder | Genera src/ y compila dist/ | Prototipo funcional |
| 5. Auditoria | Tester | Ejecuta 9 tests | test-report.json |
| 6. Refactor | Builder | Correccion basada en reporte | Producto final |
| 7. Re-ingesta | Lead Architect | Cambio de scope | Nuevo ciclo controlado |

---

## 8. Formato del test-report.json

```json
{
  "version": "1.0.0",
  "timestamp": "2026-05-17T10:30:00Z",
  "project": "cliente-x",
  "core_version": "4.0",
  "context_hash": "a7f3e2b",
  "status": "PASS | FAIL",
  "tests": [
    {
      "id": "01",
      "name": "Integridad de Contexto y Secretos",
      "status": "PASS | FAIL",
      "details": "Descripcion del resultado",
      "rule_violated": null,
      "suggestion": null
    }
  ],
  "summary": { "total": 9, "passed": 9, "failed": 0 }
}
```

## 9. Formato del changelog.md

```markdown
## [X.Y.Z] - YYYY-MM-DD
### Core: vN.N | Context hash: XXXXXXX
### Tests: 9/9 passed

**Cambios:**
- Descripcion de cambio 1
- Descripcion de cambio 2

**Test Report:** dist/test-report-X.Y.Z.json
```
