# Accesibilidad — Reglas WCAG 2.1 Nivel AA

> Estas reglas son el estándar mínimo. Todo entregable debe cumplirlas antes de pasar a producción.

---

## 1. Perceptible

### 1.1 Texto Alternativo
- [ ] Toda `<img>` informativa tiene `alt` descriptivo (qué muestra, no "imagen de...")
- [ ] Imágenes decorativas tienen `alt=""` y `aria-hidden="true"`
- [ ] SVGs informativos tienen `role="img"` y `<title>` o `aria-label`
- [ ] Íconos funcionales (sin texto acompañante) tienen `aria-label`
- [ ] Videos tienen subtítulos o transcripción

### 1.2 Contraste de Color
- [ ] Texto normal (< 18px bold / < 24px regular): ratio mínimo **4.5:1**
- [ ] Texto grande (≥ 18px bold / ≥ 24px regular): ratio mínimo **3:1**
- [ ] Componentes de interfaz y gráficos: ratio mínimo **3:1** contra el fondo
- [ ] **No usar color como único indicador** (agregar ícono, texto o patrón)
  - ❌ "Los campos en rojo son obligatorios"
  - ✅ "Los campos marcados con * son obligatorios" + borde rojo + ícono

### 1.3 Adaptabilidad
- [ ] El contenido es legible y funcional con zoom al 200%
- [ ] La orientación no está bloqueada (funciona en portrait y landscape)
- [ ] El contenido no depende de la orientación del dispositivo

---

## 2. Operable

### 2.1 Navegación por Teclado
- [ ] **Todo elemento interactivo es alcanzable con Tab**
- [ ] El orden de Tab sigue el orden visual lógico
- [ ] Focus visible en todos los elementos interactivos (`:focus-visible`)
- [ ] No hay trampas de teclado (el usuario siempre puede salir con Tab o Escape)
- [ ] Modales: foco atrapado dentro mientras están abiertos, restaurado al cerrar
- [ ] Skip-link al contenido principal como primer elemento focusable

### 2.2 Objetivos Táctiles
- [ ] Tamaño mínimo de área táctil: **44 x 44 px**
- [ ] Espacio mínimo entre objetivos táctiles: **8px**
- [ ] Links dentro de texto: padding vertical suficiente para no requerir precisión extrema

### 2.3 Tiempo
- [ ] Sin límites de tiempo para completar acciones (o con opción de extender)
- [ ] Carruseles automáticos tienen controles de pausa
- [ ] Animaciones respetan `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 2.4 Sin Contenido Peligroso
- [ ] Nada parpadea más de 3 veces por segundo
- [ ] Sin autoplay de audio/video

---

## 3. Comprensible

### 3.1 Legibilidad
- [ ] Idioma declarado en `<html lang="...">`
- [ ] Si hay cambio de idioma en un fragmento: `<span lang="en">...</span>`
- [ ] Abreviaturas explicadas la primera vez que aparecen

### 3.2 Predictibilidad
- [ ] Ningún cambio de contexto al hacer focus en un elemento
- [ ] Los formularios no se envían automáticamente al cambiar un campo
- [ ] La navegación es consistente entre páginas

### 3.3 Formularios
- [ ] Cada input tiene un `<label>` visible y asociado
- [ ] Campos obligatorios indicados con texto (no solo con `*`)
- [ ] Errores de validación:
  - Identifican el campo con error
  - Explican qué está mal
  - Sugieren cómo corregirlo
- [ ] `aria-describedby` para instrucciones adicionales
- [ ] `aria-invalid="true"` en campos con error
- [ ] `autocomplete` en campos de datos personales (name, email, tel, address)

---

## 4. Robusto

### 4.1 Compatibilidad
- [ ] HTML válido (sin tags sin cerrar, atributos duplicados)
- [ ] IDs únicos en toda la página
- [ ] Roles ARIA usados correctamente (no `role="button"` en un `<div>` si podés usar `<button>`)
- [ ] `aria-*` atributos con valores válidos
- [ ] Componentes custom tienen roles, estados y propiedades ARIA apropiados

### 4.2 Regla de Oro ARIA
**"No ARIA es mejor que ARIA mal usado."**
- Usá elementos HTML nativos siempre que sea posible
- Solo agregá ARIA cuando HTML nativo no alcance
- Si usás ARIA, testeá con lector de pantalla

---

## Herramientas de Verificación

El Tester puede usar estas herramientas como referencia (no reemplazan la revisión manual):

| Herramienta | Qué verifica |
|-------------|-------------|
| Contrast Checker (WebAIM) | Ratios de contraste |
| axe DevTools | Auditoría automática general |
| Lighthouse Accessibility | Score y problemas comunes |
| Teclado | Navegación y focus (prueba manual) |

---

## Formato de Reporte de Accesibilidad

```json
{
  "rule": "wcag/1.4.3/contrast-minimum",
  "severity": "error",
  "element": "p.subtitle",
  "file": "dist/index.html",
  "line": 23,
  "current_ratio": "3.2:1",
  "required_ratio": "4.5:1",
  "message": "Contraste insuficiente entre texto #94A3B8 y fondo #FFFFFF.",
  "suggestion": "Cambiar color de texto a --color-gray-500 (#64748B) para alcanzar ratio 4.6:1."
}
```
