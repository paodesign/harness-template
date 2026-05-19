# Especificacion Responsiva

> Mobile first. Estilos base para mobile, media queries ascendentes.

---

## Breakpoints

| Token | Ancho | Media Query |
|-------|-------|-------------|
| `--bp-mobile` | < 640px | Estilos base (sin query) |
| `--bp-tablet` | >= 640px | `@media (min-width: 640px)` |
| `--bp-laptop` | >= 1024px | `@media (min-width: 1024px)` |
| `--bp-desktop` | >= 1280px | `@media (min-width: 1280px)` |

**Nunca uses `max-width` en media queries.**

## Grid Responsivo

| Breakpoint | Columnas | Gap |
|------------|----------|-----|
| Mobile | 1 | --space-4 |
| Tablet | 2 | --space-6 |
| Laptop | 3 | --space-6 |
| Desktop | 4 (si aplica) | --space-8 |

## Tipografia Responsiva

| Token | Mobile | Tablet+ |
|-------|--------|---------|
| `--text-4xl` | 1.875rem | 2.25rem |
| `--text-3xl` | 1.5rem | 1.875rem |
| `--text-2xl` | 1.25rem | 1.5rem |

Texto de cuerpo (16px) **no cambia** entre breakpoints.

## Checklist

- [ ] Sin overflow horizontal en ningun breakpoint
- [ ] Texto legible sin zoom en mobile (min 16px cuerpo)
- [ ] Botones y links min 44x44px en mobile
- [ ] Imagenes no se cortan ni distorsionan
- [ ] Formularios usables en mobile (inputs ancho completo)
- [ ] Tablas con scroll horizontal o alternativa mobile
