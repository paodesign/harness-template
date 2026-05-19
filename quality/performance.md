# Performance Rules

## Métricas objetivo (en 3G simulado)
- **LCP** < 2.5s
- **CLS** < 0.1
- **INP** < 200ms
- **TBT** < 200ms

## Reglas
- Imágenes en WebP o AVIF (PNG/JPG solo si fallback necesario).
- `<img>` con `width` y `height` para reservar espacio (evita CLS).
- Fuentes con `font-display: swap`.
- CSS crítico inline si total < 14KB.
- JS no bloqueante: `defer` o `async`.
- Code-splitting por ruta en SPAs.
