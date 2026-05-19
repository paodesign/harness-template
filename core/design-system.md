# Sistema de Diseno — Tokens Base

> Tokens de diseno reutilizables del sistema. Cada proyecto puede extender o sobrescribir valores en su `context.md`, pero nunca inventar tokens que no esten aca o en el override del cliente.

---

## 1. Colores

### Paleta Base (Neutrales)
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-white` | `#FFFFFF` | Fondo principal |
| `--color-gray-50` | `#F8FAFC` | Fondo secundario, cards |
| `--color-gray-100` | `#F1F5F9` | Bordes suaves |
| `--color-gray-200` | `#E2E8F0` | Bordes visibles |
| `--color-gray-300` | `#CBD5E1` | Texto deshabilitado |
| `--color-gray-400` | `#94A3B8` | Placeholders |
| `--color-gray-500` | `#64748B` | Texto de soporte |
| `--color-gray-600` | `#475569` | Texto de cuerpo |
| `--color-gray-700` | `#334155` | Texto principal |
| `--color-gray-800` | `#1E293B` | Headings |
| `--color-gray-900` | `#0F172A` | Maximo contraste |

### Paleta de Acento (Sobrescribible por cliente)
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#3B82F6` | CTA, links |
| `--color-primary-hover` | `#2563EB` | Hover primary |
| `--color-primary-light` | `#EFF6FF` | Fondos de badges |
| `--color-secondary` | `#14B8A6` | Acciones secundarias |
| `--color-success` | `#22C55E` | Estados positivos |
| `--color-warning` | `#F59E0B` | Alertas |
| `--color-error` | `#EF4444` | Errores |

### Contraste: Todo texto minimo **4.5:1** contra su fondo (WCAG AA).

---

## 2. Tipografia

| Token | Tamano | Peso | Line-height | Uso |
|-------|--------|------|-------------|-----|
| `--text-xs` | 0.75rem | 400 | 1.5 | Captions |
| `--text-sm` | 0.875rem | 400 | 1.5 | Metadata |
| `--text-base` | 1rem (16px) | 400 | 1.6 | Cuerpo |
| `--text-lg` | 1.125rem | 500 | 1.5 | Subtitulos |
| `--text-xl` | 1.25rem | 600 | 1.4 | Headings seccion |
| `--text-2xl` | 1.5rem | 700 | 1.3 | Titulos pagina |
| `--text-3xl` | 1.875rem | 700 | 1.25 | Titulos principales |
| `--text-4xl` | 2.25rem | 800 | 1.2 | Hero |

- Familia sans: `'Inter', system-ui, sans-serif`
- Familia mono: `'JetBrains Mono', monospace`
- Largo maximo de linea: 65-75 caracteres
- Siempre `rem`, nunca `px` para texto

---

## 3. Espaciado (multiplos de 4px)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 0.25rem (4px) | Padding minimo |
| `--space-2` | 0.5rem (8px) | Gap inline |
| `--space-3` | 0.75rem (12px) | Padding badges |
| `--space-4` | 1rem (16px) | Padding botones |
| `--space-6` | 1.5rem (24px) | Margen bloques |
| `--space-8` | 2rem (32px) | Separacion interna |
| `--space-10` | 2.5rem (40px) | Separacion secciones |
| `--space-16` | 4rem (64px) | Secciones mayores |
| `--space-20` | 5rem (80px) | Padding hero |

---

## 4. Bordes y Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 0.25rem | Tags |
| `--radius-md` | 0.5rem | Botones, inputs |
| `--radius-lg` | 0.75rem | Cards |
| `--radius-full` | 9999px | Avatares, pills |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Sutil |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modales |

---

## 5. Componentes Base

### Boton Primario
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  font-size: var(--text-base);
  font-weight: 600;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  min-height: 44px; /* WCAG target tactil */
  min-width: 44px;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
```

### Input
```css
.input {
  font-size: var(--text-base);
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  min-height: 44px;
  width: 100%;
}
.input:focus { border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-light); }
```

---

## 6. Reglas

1. **Nunca hardcodees valores** — todo referencia tokens
2. **Mobile first** — estilos base para mobile, media queries para expandir
3. **Accesibilidad primero** — `:hover`, `:focus-visible`, `:disabled` en todo interactivo
4. **Extension por cliente** — sobrescriben paleta de acento en `context.md`, no neutrales
