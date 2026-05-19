# Accesibilidad — WCAG 2.1 Nivel AA

## 1. Perceptible
- [ ] `<img>` informativas: alt descriptivo. Decorativas: `alt=""` + `aria-hidden="true"`
- [ ] Contraste texto normal: min **4.5:1**. Texto grande: min **3:1**
- [ ] Color no es el unico indicador (agregar icono o texto)

## 2. Operable
- [ ] Todo interactivo alcanzable con Tab, orden logico
- [ ] Focus visible (`:focus-visible`) en todo interactivo
- [ ] Sin trampas de teclado. Modales: foco atrapado, restaurado al cerrar
- [ ] Skip-link al contenido principal
- [ ] Area tactil minima: **44x44px**, espacio entre targets: **8px**
- [ ] Animaciones respetan `prefers-reduced-motion`

## 3. Comprensible
- [ ] `<html lang>` correcto, cambios de idioma marcados con `<span lang>`
- [ ] Cada input tiene `<label>` visible y asociado
- [ ] Campos obligatorios indicados con texto (no solo `*`)
- [ ] Errores: identifican campo, explican que paso, sugieren correccion
- [ ] `autocomplete` en campos de datos personales

## 4. Robusto
- [ ] HTML valido, IDs unicos
- [ ] ARIA solo cuando HTML nativo no alcanza
- [ ] "No ARIA es mejor que ARIA mal usado"
