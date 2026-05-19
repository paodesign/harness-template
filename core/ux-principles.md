# Principios de UX — Metodología de Diseño

> Estos principios guían todas las decisiones de diseño del sistema. Cuando haya conflicto entre estética y usabilidad, la usabilidad gana.

---

## Principios Fundamentales

### 1. Claridad sobre creatividad
El usuario debe entender qué hacer en cada pantalla en menos de 5 segundos. Si necesita pensar demasiado, el diseño falló. Priorizá la comunicación clara sobre la originalidad visual.

### 2. Jerarquía visual intencionada
Cada pantalla tiene **un objetivo principal**. La jerarquía visual debe guiar al usuario hacia ese objetivo:
- **Nivel 1**: Acción principal (CTA, formulario, contenido clave) — máximo contraste y tamaño
- **Nivel 2**: Información de soporte — contraste medio, tamaño secundario
- **Nivel 3**: Navegación y metadata — contraste bajo, tamaño mínimo legible

### 3. Reducir carga cognitiva
- Máximo **5±2 opciones** visibles a la vez (Ley de Miller)
- Agrupá información relacionada (Ley de proximidad)
- Usá patrones conocidos antes de inventar nuevos (Ley de Jakob)
- Eliminá elementos que no contribuyan al objetivo de la pantalla

### 4. Consistencia predecible
- Misma acción = mismo aspecto visual en todo el sitio
- Los patrones de interacción no cambian entre páginas
- El tono de escritura es uniforme (ver sección UX Writing)

### 5. Feedback inmediato
Toda acción del usuario debe tener una respuesta visible:
- Clicks → cambio de estado visual inmediato
- Envío de formularios → estado de carga + confirmación/error
- Errores → mensaje específico junto al campo problemático, no al final del formulario
- Scroll/navegación → indicadores de posición

### 6. Accesibilidad como base, no como extra
No es un checklist final, es un criterio de diseño desde el inicio:
- Contraste suficiente en toda la paleta
- Navegación por teclado en todos los componentes interactivos
- Textos alternativos con significado, no decorativos
- Tamaños táctiles mínimos respetados

---

## Metodología de Trabajo

### Proceso por Entregable

```
1. Leer context.md del cliente
   ↓
2. Identificar el objetivo principal de cada pantalla
   ↓
3. Definir la jerarquía visual (qué ve primero, segundo, tercero)
   ↓
4. Seleccionar componentes del design-system que resuelvan cada nivel
   ↓
5. Construir mobile-first (ver responsive-spec.md)
   ↓
6. Validar contra heurísticas (core/quality/heuristics.json)
   ↓
7. Pasar a auditoría
```

### Decisiones de Layout

#### Cuándo usar cada layout
| Necesidad | Layout | Razón |
|-----------|--------|-------|
| Contenido lineal (artículo, landing) | Stack vertical | Flujo natural de lectura |
| Items equivalentes (cards, productos) | Grid | Comparación visual rápida |
| Navegación + contenido | Sidebar + main | Acceso persistente a nav |
| Datos tabulares | Tabla | Comparación de valores |
| Acciones agrupadas | Flex horizontal | Agrupación semántica |

#### Reglas de Layout
- El contenido principal nunca excede **1280px** de ancho
- Los párrafos de texto nunca exceden **720px** (para legibilidad)
- El espacio en blanco no es "espacio vacío" — es un elemento de diseño que da respiro

---

## UX Writing

### Principios de Escritura

1. **Directo**: Decí lo que el usuario necesita saber, no lo que vos querés decir
2. **Accionable**: Los botones dicen qué pasa al clickearlos ("Enviar solicitud", no "Submit")
3. **Humano**: Evitá jerga técnica innecesaria. Escribí como le hablarías a una persona
4. **Consistente**: Si un botón dice "Cancelar" en un lugar, no dice "Deshacer" en otro

### Patrones de Escritura

| Elemento | Regla | Ejemplo bueno | Ejemplo malo |
|----------|-------|---------------|--------------|
| CTA principal | Verbo + objeto | "Agendar consulta" | "Enviar" |
| Error de formulario | Qué pasó + qué hacer | "El email no es válido. Revisá el formato." | "Error" |
| Estado vacío | Qué es + qué hacer | "Todavía no tenés proyectos. Creá el primero." | "No hay datos" |
| Confirmación | Qué se hizo | "Tu consulta fue enviada. Te respondemos en 24hs." | "Éxito" |
| Tooltip | Una oración | "Este campo es obligatorio" | "Required field" |

### Idioma
- El idioma principal del contenido se define en el `context.md` del cliente
- Si el cliente es argentino, usá voseo ("Ingresá tu email", no "Ingrese su email")
- Mantené consistencia de persona gramatical en todo el sitio

---

## Patrones de Interacción

### Formularios
- Labels siempre visibles (no solo placeholder)
- Validación en tiempo real al perder foco (blur), no mientras el usuario escribe
- Errores debajo del campo, no arriba
- Botón de submit deshabilitado hasta que el formulario sea válido (con indicación visual de qué falta)
- Agrupá campos relacionados con fieldsets

### Navegación
- El usuario siempre debe saber: dónde está, de dónde vino, a dónde puede ir
- Breadcrumbs para sitios con más de 2 niveles de profundidad
- Menú mobile: hamburguesa a la derecha, logo a la izquierda
- Máximo 7 items en navegación principal

### Estados de Carga
- Skeleton screens para carga inicial (no spinners genéricos)
- Indicadores de progreso para acciones que tardan más de 2 segundos
- Nunca dejes al usuario sin feedback visual durante una espera
