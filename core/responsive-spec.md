# Responsive Spec

## Breakpoints
- **375px** — mobile base (iPhone SE como referencia conservadora)
- **768px** — tablet
- **1280px** — desktop
- **1536px** — desktop wide (solo si el diseño lo justifica)

## Reglas
- Mobile-first siempre. Las media queries son `min-width`.
- Cero overflow horizontal en 375px.
- Tipografía fluida entre 375 y 1280 usando `clamp()`.
- Áreas táctiles mínimas: 44×44px.
- Imágenes con `srcset` o `picture` para servir el peso adecuado.
