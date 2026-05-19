# Principios de UX — Metodologia de Diseno

---

## Principios Fundamentales

1. **Claridad sobre creatividad**: El usuario entiende que hacer en menos de 5 segundos
2. **Jerarquia visual intencionada**: Cada pantalla tiene un objetivo principal
   - Nivel 1: Accion principal (maximo contraste)
   - Nivel 2: Info de soporte (contraste medio)
   - Nivel 3: Navegacion y metadata (contraste bajo)
3. **Reducir carga cognitiva**: Max 5+-2 opciones visibles, agrupar info relacionada
4. **Consistencia predecible**: Misma accion = mismo aspecto en todo el sitio
5. **Feedback inmediato**: Toda accion tiene respuesta visible
6. **Accesibilidad como base**: Contraste, teclado, alt-text, areas tactiles

---

## UX Writing

| Elemento | Regla | Ejemplo bueno | Ejemplo malo |
|----------|-------|---------------|--------------|
| CTA | Verbo + objeto | "Agendar consulta" | "Enviar" |
| Error | Que paso + que hacer | "Email no valido. Revisa el formato." | "Error" |
| Estado vacio | Que es + que hacer | "No tenes proyectos. Crea el primero." | "No hay datos" |
| Confirmacion | Que se hizo | "Tu consulta fue enviada." | "Exito" |

- Si el cliente es argentino, usar voseo ("Ingresa tu email")
- Mantener consistencia de persona gramatical en todo el sitio

---

## Patrones de Interaccion

### Formularios
- Labels siempre visibles (no solo placeholder)
- Validacion en blur, no mientras escribe
- Errores debajo del campo
- Campos agrupados con fieldsets

### Navegacion
- Breadcrumbs para +2 niveles de profundidad
- Menu mobile: hamburguesa derecha, logo izquierda
- Max 7 items en nav principal
