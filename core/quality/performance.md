# Performance — Umbrales de Rendimiento

> Estos umbrales aplican al contenido generado en `dist/`. Un sitio lento es un sitio que pierde usuarios.

---

## Métricas Objetivo

| Métrica | Umbral | Medición |
|---------|--------|----------|
| Largest Contentful Paint (LCP) | < 2.5s | Tiempo hasta que el elemento más grande es visible |
| First Input Delay (FID) | < 100ms | Tiempo entre primera interacción y respuesta |
| Cumulative Layout Shift (CLS) | < 0.1 | Estabilidad visual (cuánto se mueve el contenido) |
| Time to First Byte (TTFB) | < 800ms | Respuesta inicial del servidor |
| Total page weight | < 1.5 MB | Peso total de la página con todos los assets |

---

## Imágenes

### Formatos Preferidos (en orden)
1. **WebP** — mejor compresión, soporte universal moderno
2. **AVIF** — superior compresión, soporte creciente (con fallback)
3. **JPG** — fallback para fotos (calidad 80-85%)
4. **PNG** — solo para imágenes que requieren transparencia
5. **SVG** — íconos, logos, ilustraciones vectoriales

### Reglas
- [ ] Ninguna imagen individual supera **200KB**
- [ ] Imágenes hero/banner: máximo **400KB**
- [ ] Todas las imágenes tienen dimensiones explícitas (`width` y `height` en el HTML)
- [ ] Imágenes below-the-fold tienen `loading="lazy"`
- [ ] Imágenes above-the-fold tienen `fetchpriority="high"` (la hero/LCP)
- [ ] Usar `<picture>` con `srcset` para servir resoluciones apropiadas
- [ ] No servir imágenes más grandes que su tamaño de display (2x máximo para retina)

```html
<!-- Ejemplo correcto -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="..." width="1200" height="600" 
       fetchpriority="high" decoding="async">
</picture>

<!-- Below the fold -->
<img src="foto.webp" alt="..." width="400" height="300" loading="lazy">
```

---

## CSS

### Reglas
- [ ] Un solo archivo CSS en producción (o máximo 2 si hay critical CSS)
- [ ] CSS crítico (above-the-fold) inline en `<head>` si el CSS total supera 50KB
- [ ] Sin reglas CSS sin usar (dead code)
- [ ] Sin reglas duplicadas
- [ ] Peso total del CSS: máximo **100KB** (sin comprimir)
- [ ] Sin `@import` en CSS (bloquea el render)

---

## JavaScript

### Reglas
- [ ] Scripts no críticos tienen `defer` o `async`
- [ ] Sin scripts que bloqueen el render en `<head>` (sin `defer`/`async`)
- [ ] Peso total de JS propio: máximo **150KB** (sin comprimir)
- [ ] Librerías de terceros justificadas y documentadas
- [ ] No cargar librerías completas si solo se usa una función (tree-shaking o importar lo necesario)

---

## Fuentes

### Reglas
- [ ] Máximo **2 familias tipográficas** cargadas
- [ ] Máximo **4 archivos de fuente** en total (variantes de peso)
- [ ] Formato: **WOFF2** (mejor compresión)
- [ ] `font-display: swap` para evitar texto invisible durante la carga
- [ ] Precargar la fuente principal: `<link rel="preload" as="font" type="font/woff2" href="..." crossorigin>`

```css
@font-face {
  font-family: 'Inter';
  src: url('inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## HTML

### Reglas
- [ ] Sin elementos DOM innecesarios (máximo ~1500 nodos)
- [ ] Sin iframes ocultos o innecesarios
- [ ] Preconnect a orígenes de terceros si se usan:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Checklist Rápido del Tester

| # | Verificación | Umbral |
|---|-------------|--------|
| 1 | Peso total de la página | < 1.5 MB |
| 2 | Imagen más pesada | < 400KB |
| 3 | CSS total | < 100KB |
| 4 | JS propio total | < 150KB |
| 5 | Archivos de fuente | ≤ 4 archivos, WOFF2 |
| 6 | Imágenes below-fold con lazy loading | 100% |
| 7 | Dimensiones explícitas en imágenes | 100% |
| 8 | Scripts con defer/async | 100% (no críticos) |
| 9 | Reglas CSS sin usar | 0 |
| 10 | LCP estimado | < 2.5s |
