# Accessibility — WCAG 2.1 AA Checklist

## Perceptible
- Contraste texto/fondo ≥ 4.5:1 (normal) y ≥ 3:1 (texto grande / iconos).
- Alt-text en imágenes informativas. Imágenes decorativas: `alt=""`.
- Información no transmitida solo por color.

## Operable
- Toda funcionalidad accesible por teclado.
- Foco visible (no `outline: none` sin reemplazo).
- Skip-to-main-content si hay nav extenso.
- Áreas táctiles ≥ 44×44px.

## Entendible
- Idioma declarado en `<html lang>`.
- Errores de formulario con texto, no solo color.
- Comportamiento consistente (mismo componente = mismo comportamiento).

## Robusto
- HTML semántico (nada de `<div>` para todo).
- ARIA solo si HTML semántico no alcanza.
