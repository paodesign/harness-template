# Walkthrough — sereno-yoga — ciclo 1

**Walker version:** 1.0.0
**Personas simuladas:** Lucía (34), Diego (47)
**Heurísticas aplicadas:** heuristics.json v1.0

---

## Persona 1: Lucía — Flujo "encontrar una clase cerca del trabajo"

- ✅ **H2 Match con el mundo real**: El copy del Hero ("Yoga cerca tuyo") y el LocationFinder apelan directamente a su JTBD de proximidad urbana sin usar misticismo.
- ✅ **HX1 Voice match**: El tono directo y sobrio ("Sin postureo") genera confianza inmediata en alguien con poco tiempo y enfoque práctico.
- ✅ **HX2 Cobertura de estados**: Lucía percibe seguridad durante la carga del mapa y la confirmación de reserva ("Listo, te esperamos el martes"), lo que cumple su meta de rapidez.
- ⚠️ **P2 — H6 Reconocer antes que recordar**: El calendario (`ClassSchedule`) afirma que "todas las clases son aptas". Lucía busca específicamente "yoga suave". No encontrar una etiqueta explícita de nivel en el horario le genera una micro-duda sobre si la clase de "hoy" será realmente suave o intensa.

---

## Persona 2: Diego — Flujo "comparar y entender nivel sin registrarse"

- ✅ **H3 Control y libertad del usuario**: Diego valora enormemente poder ver los horarios y reservar sin la barrera de "crear cuenta" o "llamar por teléfono".
- ✅ **H8 Diseño minimalista**: La ausencia de ruido visual y misticismo (Harness branding) le permite comparar la propuesta de valor de forma racional y rápida.
- ⚠️ **P2 — H10 Ayuda y documentación**: Aunque el FAQ está presente, el contenido actual en `content.json` es genérico. Para alguien que está comparando niveles, falta una aclaración más detallada sobre la metodología "sin postureo" para terminar de convencerlo de que no se sentirá fuera de lugar.
- ⚠️ **P2 — H2 Match con el mundo real**: El `TestimonialList` es funcional pero genérico. Diego busca señales de que "otros como él" (47 años, principiantes) están en el estudio. El copy actual no segmenta los testimonios por perfil de usuario.

---

## Resumen
- **P1 (bloqueantes UX):** 0
- **P2 (mejorables):** 3
- **P3 (nice-to-have):** 1 (Visuales reales de los estudios)

## Recomendación al siguiente ciclo
El foco del próximo ciclo debe ser **enriquecer el copy de ClassSchedule y FAQ**. Se recomienda que el Writer genere variantes de clases (ej: "Hatha Suave", "Vinyasa Inicial") para que Lucía pueda reconocer su preferencia, y que el FAQ responda específicamente a la duda de "nivel y edad" para Diego.
