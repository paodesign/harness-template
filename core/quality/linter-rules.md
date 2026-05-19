# Reglas de Linter — Validacion de Codigo Limpio

## HTML
- [ ] DOCTYPE, `<html lang>`, charset, viewport presentes
- [ ] Un solo `<h1>` por pagina, jerarquia sin saltos
- [ ] Toda `<img>` tiene `alt`, todo `<a>` tiene `href` valido
- [ ] IDs unicos, sin tags vacios innecesarios
- [ ] Semantica: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Labels asociados a inputs, tablas con `<thead>`/`<th scope>`
- [ ] Sin estilos inline, sin JS inline, sin `<br>` para espaciado

## CSS
- [ ] Variables CSS en `:root` usando tokens del design-system
- [ ] Sin valores hardcodeados, sin `!important`, sin selectores +3 niveles
- [ ] Media queries mobile-first (`min-width`)
- [ ] Sin reglas duplicadas, sin dead code
- [ ] Tamanos de fuente en `rem`, no `px`

## JavaScript
- [ ] `const`/`let`, sin `var`, sin `console.log` en produccion
- [ ] Sin `eval()`, sin `document.write()`, sin `innerHTML` con input del usuario

## Auditoria de Secretos (Test 01)
- [ ] Sin API keys, tokens o passwords en codigo de `dist/`
- [ ] Sin archivos `.env` en `dist/`
- [ ] Sin comentarios que expongan credenciales o URLs internas
- [ ] Sin rutas absolutas del filesystem local

## Severidades
- **error**: Bloquea aprobacion
- **warning**: No bloquea, se documenta
