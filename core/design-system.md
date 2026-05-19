# Design System — Sereno Yoga

Sistema escalable basado en Atomic Design. Utiliza tokens primitivos (escala de valores base) y tokens semánticos (aplicación por contexto). Mobile-first.

## 1. Tokens Primitivos (Paleta Base)

| Token Base | Valor | Notas |
|------------|-------|-------|
| `--beige-100` | #FAF6F0 | |
| `--beige-300` | #E5DDD0 | |
| `--neutral-0`   | #FFFFFF | |
| `--neutral-800` | #6E6357 | |
| `--neutral-900` | #2A2520 | |
| `--salvia-400`  | #6B7F4F | |
| `--salvia-600`  | #556839 | |
| `--terra-500`   | #C97C4B | |
| `--green-500`   | #4F7C5C | |
| `--yellow-500`  | #C77800 | |
| `--red-500`     | #A03A2E | |

## 2. Tokens Semánticos (Light Mode)

*Nota: Estructura preparada para integrar Dark Mode invirtiendo estos valores en el futuro.*

| Token Semántico | Valor Base | Uso Contextual |
|-----------------|------------|----------------|
| `--color-bg-base` | `var(--beige-100)` | Fondo principal de la app |
| `--color-surface` | `var(--neutral-0)` | Cards, modales, offcanvas |
| `--color-text-main` | `var(--neutral-900)` | Texto principal (alto contraste) |
| `--color-text-muted`| `var(--neutral-800)` | Texto secundario (metadata, descripciones) |
| `--color-action-primary` | `var(--salvia-400)` | Botones principales, enlaces clave |
| `--color-action-primary-hover` | `var(--salvia-600)` | Estado hover primario |
| `--color-accent` | `var(--terra-500)` | Destacados, badges, notificaciones |
| `--color-border` | `var(--beige-300)` | Separadores y bordes sutiles |

**Estados Semánticos:**
- `--color-status-success`: `var(--green-500)`
- `--color-status-warning`: `var(--yellow-500)`
- `--color-status-error`: `var(--red-500)`

## 3. Tipografía (Base `1rem` = 16px)

Se utilizan unidades relativas (`rem`) para garantizar accesibilidad (WCAG) si el usuario modifica el tamaño de fuente base de su sistema.

| Token | Valor |
|-------|-------|
| `--font-sans`    | "Inter", system-ui, sans-serif |
| `--font-display` | "Fraunces", Georgia, serif |
| `--font-mono`    | "JetBrains Mono", monospace |

### Escala de Texto
- `--text-xs`: `0.75rem` (12px) | Line height: `1.2`
- `--text-sm`: `0.875rem` (14px) | Line height: `1.4`
- `--text-base`: `1rem` (16px) | Line height: `1.5`
- `--text-lg`: `1.25rem` (20px) | Line height: `1.4`
- `--text-xl`: `1.75rem` (28px) | Line height: `1.2`
- `--text-2xl`: `2.75rem` (44px) | Line height: `1.1`

## 4. Espaciado y Geometría (Base 4px = 0.25rem)

| Escala | Valor |
|--------|-------|
| `--sp-1` | `0.25rem` (4px) |
| `--sp-2` | `0.5rem` (8px) |
| `--sp-3` | `0.75rem` (12px) |
| `--sp-4` | `1rem` (16px) |
| `--sp-6` | `1.5rem` (24px) |
| `--sp-8` | `2rem` (32px) |
| `--sp-12`| `3rem` (48px) |
| `--sp-16`| `4rem` (64px) |

### Radios (Border Radius)
`--r-sm`: `0.375rem` (6px) · `--r-md`: `0.75rem` (12px) · `--r-lg`: `1.25rem` (20px) · `--r-full`: `9999px`

## 5. Interacción (Motion y Elevación)

**Transiciones:**
- `--motion-fast`: `150ms cubic-bezier(0.4, 0, 0.2, 1)` (Hover states)
- `--motion-base`: `300ms cubic-bezier(0.4, 0, 0.2, 1)` (Modales, expansiones)

**Elevación (Sombras):**
- `--shadow-sm`: `0 1px 2px rgba(42,37,32, 0.08)`
- `--shadow-md`: `0 6px 16px rgba(42,37,32, 0.10)`

## 6. Reglas de Implementación (Atomic Design)
1. **Átomos:** Los componentes base (Botones, Inputs) SOLO deben consumir tokens semánticos (ej. `var(--color-action-primary)`), **nunca** tokens primitivos (ej. `var(--salvia-400)`) ni valores HEX.
2. **Unidades:** Prohibido el uso de `px` para tipografía, `margin` o `padding`. Todo debe utilizar la escala `--sp-X` en `rem`.
3. **Responsive:** Mobile-first. Breakpoints obligatorios: 375px (base), 768px (md), 1280px (lg).
