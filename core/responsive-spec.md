# Especificación Responsiva — Breakpoints y Reglas Adaptativas

> Mobile first. Los estilos base se escriben para mobile y se expanden con media queries ascendentes.

---

## Breakpoints

| Token | Ancho | Dispositivo | Media Query |
|-------|-------|-------------|-------------|
| `--bp-mobile` | < 640px | Smartphones | Estilos base (sin query) |
| `--bp-tablet` | ≥ 640px | Tablets vertical | `@media (min-width: 640px)` |
| `--bp-laptop` | ≥ 1024px | Tablets horizontal, laptops | `@media (min-width: 1024px)` |
| `--bp-desktop` | ≥ 1280px | Desktop | `@media (min-width: 1280px)` |
| `--bp-wide` | ≥ 1536px | Pantallas grandes | `@media (min-width: 1536px)` |

### Regla crítica
**Nunca uses `max-width` en media queries.** Todo el CSS se escribe mobile-first con `min-width`. El único caso permitido de `max-width` es para contenedores de contenido, no para breakpoints.

---

## Contenedores

| Breakpoint | Max-width del contenedor | Padding lateral |
|------------|--------------------------|-----------------|
| Mobile | 100% | 16px (--space-4) |
| Tablet | 640px | 24px (--space-6) |
| Laptop | 960px | 32px (--space-8) |
| Desktop | 1200px | 32px (--space-8) |
| Wide | 1400px | 32px (--space-8) |

```css
.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}
```

---

## Reglas Adaptativas

### Grid
| Breakpoint | Columnas | Gap |
|------------|----------|-----|
| Mobile | 1 columna (stack) | --space-4 |
| Tablet | 2 columnas | --space-6 |
| Laptop | 3 columnas | --space-6 |
| Desktop | 4 columnas (si aplica) | --space-8 |

### Tipografía Responsiva
Los headings se reducen en mobile para evitar texto cortado:

| Token | Mobile | Tablet+ |
|-------|--------|---------|
| `--text-4xl` | 1.875rem (30px) | 2.25rem (36px) |
| `--text-3xl` | 1.5rem (24px) | 1.875rem (30px) |
| `--text-2xl` | 1.25rem (20px) | 1.5rem (24px) |
| `--text-xl` | 1.125rem (18px) | 1.25rem (20px) |

El texto de cuerpo (`--text-base`: 16px) **no cambia** entre breakpoints.

### Navegación
| Breakpoint | Comportamiento |
|------------|---------------|
| Mobile | Hamburguesa → menú fullscreen o slide-in |
| Tablet | Hamburguesa → dropdown o sidebar |
| Laptop+ | Navegación horizontal visible |

### Imágenes
- Todas las imágenes llevan `width: 100%; height: auto;` como base
- Usá `srcset` y `sizes` para servir resoluciones apropiadas
- Aspect ratio preservado siempre — nunca estirés una imagen

### Tablas
- En mobile, tablas con más de 3 columnas deben tener scroll horizontal con `overflow-x: auto`
- Alternativa: reformatear como cards stacked en mobile

---

## Checklist de Validación Responsiva

El Tester debe verificar cada uno de estos puntos:

- [ ] No hay overflow horizontal en ningún breakpoint
- [ ] El texto es legible sin zoom en mobile (mínimo 16px para cuerpo)
- [ ] Los botones y links tienen mínimo 44x44px de área táctil en mobile
- [ ] Las imágenes no se cortan ni distorsionan al cambiar de breakpoint
- [ ] La navegación es accesible en todos los breakpoints
- [ ] Los formularios son usables en mobile (inputs de ancho completo, teclado no tapa el campo activo)
- [ ] No hay contenido oculto sin forma de accederlo en algún breakpoint
- [ ] Las tablas son legibles o tienen alternativa mobile
- [ ] El footer es accesible y no queda cortado
