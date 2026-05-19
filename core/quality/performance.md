# Performance — Umbrales de Rendimiento

## Metricas Objetivo
| Metrica | Umbral |
|---------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Peso total pagina | < 1.5 MB |

## Imagenes
- Formatos: WebP > AVIF > JPG (80-85%) > PNG (solo transparencia) > SVG (vectores)
- Ninguna imagen > **200KB** (hero max 400KB)
- `width`/`height` explicitos en HTML
- Below-fold: `loading="lazy"`. Above-fold/hero: `fetchpriority="high"`
- `<picture>` con `srcset` para multiples resoluciones

## CSS
- Max **100KB** sin comprimir. Sin dead code, sin duplicados, sin `@import`
- CSS critico inline en `<head>` si total > 50KB

## JavaScript
- Scripts no criticos: `defer` o `async`. Max **150KB** propio
- Sin librerias completas si solo se usa una funcion

## Fuentes
- Max **2 familias**, **4 archivos** total, formato **WOFF2**
- `font-display: swap`. Precargar fuente principal.
