# Reglas de Linter — Validación de Código Limpio

> Estas reglas aplican a todo el código generado en `dist/`. El Tester las usa como parte del Test 03 (Consistencia Visual).

---

## HTML

### Estructura
- [ ] DOCTYPE declarado: `<!DOCTYPE html>`
- [ ] Atributo `lang` en `<html>` con el idioma correcto del cliente
- [ ] `<meta charset="UTF-8">` presente
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` presente
- [ ] Un solo `<h1>` por página
- [ ] Jerarquía de headings sin saltos (no pasar de h2 a h4)
- [ ] Cada `<img>` tiene atributo `alt` (vacío `alt=""` solo para imágenes decorativas)
- [ ] Cada `<a>` tiene `href` válido (no `href="#"` sin JavaScript asociado)
- [ ] IDs únicos en toda la página
- [ ] Sin tags vacíos innecesarios (`<div></div>`, `<span></span>`)

### Semántica
- [ ] Usar `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` donde corresponda
- [ ] `<main>` aparece una sola vez
- [ ] Formularios con `<label>` asociado a cada `<input>` (via `for`/`id`)
- [ ] Listas de navegación dentro de `<nav>` usando `<ul>`/`<li>`
- [ ] Tablas de datos con `<thead>`, `<tbody>`, `<th scope>`
- [ ] No usar `<div>` o `<span>` cuando existe un tag semántico apropiado

### Prohibiciones
- ❌ Estilos inline (`style="..."`) — excepto para propiedades dinámicas generadas por JS
- ❌ JavaScript inline (`onclick="..."`) — usar event listeners
- ❌ `<br>` para crear espaciado — usar CSS margin/padding
- ❌ `<table>` para layout — solo para datos tabulares
- ❌ Comentarios de desarrollo en producción (`TODO`, `FIXME`, `HACK`)

---

## CSS

### Organización
- [ ] Variables CSS declaradas en `:root` usando tokens del `design-system.md`
- [ ] Sin valores hardcodeados de colores, tamaños o espaciados
- [ ] Media queries mobile-first (`min-width`, nunca `max-width`)
- [ ] Sin reglas duplicadas
- [ ] Sin selectores de más de 3 niveles de profundidad (`.a .b .c .d` ❌)
- [ ] Sin `!important` — excepto para overrides de terceros documentados

### Naming
- [ ] Clases descriptivas y consistentes (BEM, utility-first o convención definida en context.md)
- [ ] Sin clases genéricas sin contexto (`.box`, `.wrapper`, `.container2`)
- [ ] IDs no usados para estilos — solo para JavaScript o anchors

### Valores
- [ ] Tamaños de fuente en `rem`, no en `px` (excepto bordes y sombras)
- [ ] Sin unidades en valor `0` (`margin: 0`, no `margin: 0px`)
- [ ] Shorthand usado cuando aplica (`margin: 8px 16px` en vez de 4 propiedades)
- [ ] Colores en formato consistente (hex 6 dígitos o var() — no mezclar hex, rgb, hsl)

### Prohibiciones
- ❌ `float` para layout — usar Flexbox o Grid
- ❌ `position: absolute` sin `position: relative` en el padre
- ❌ `z-index` mayor a 100 sin justificación documentada
- ❌ Prefijos vendor manuales — usar autoprefixer
- ❌ `@import` en CSS — usar un solo archivo o bundler

---

## JavaScript (si aplica)

### Buenas prácticas
- [ ] `'use strict'` o módulos ES
- [ ] Sin `var` — usar `const` y `let`
- [ ] Sin `console.log` en producción
- [ ] Event listeners removidos cuando el componente se destruye
- [ ] Error handling en fetch/async operations

### Prohibiciones
- ❌ `eval()` — nunca
- ❌ `document.write()` — nunca
- ❌ Variables globales fuera de módulos
- ❌ `innerHTML` con contenido del usuario (riesgo XSS) — usar `textContent`

---

## Formato de Reporte

Cuando el Tester encuentra violaciones, las reporta así:

```json
{
  "rule": "html/semantics/single-h1",
  "severity": "error",
  "file": "dist/index.html",
  "line": 45,
  "message": "Segundo <h1> encontrado. Solo se permite uno por página.",
  "suggestion": "Cambiar a <h2> o reorganizar la jerarquía de headings."
}
```

### Severidades
- **error**: Debe corregirse. Bloquea la aprobación.
- **warning**: Debería corregirse. No bloquea pero se documenta.
- **info**: Sugerencia de mejora. No bloquea, no se documenta en el reporte final.
