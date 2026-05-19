# Context — sereno-yoga

## Identificación
- **projectName:** sereno-yoga
- **projectType:** landing
- **owner:** pao
- **deadline:** 2026-06-15

## Objetivo
Generar una landing que permita a una persona descubrir el estudio Sereno
Yoga más cercano, ver clases disponibles esta semana y reservar un lugar
en una clase sin crear cuenta previa, en menos de 90 segundos en mobile.

## Audiencia
Personas de 28 a 55 años, residentes urbanos, que ya intentaron yoga
alguna vez pero abandonaron por horarios o intimidación, y que buscan
una práctica de baja fricción cerca de su casa o trabajo.

## Personas
- **Persona A:** Lucía, 34, JTBD "encontrar una clase de yoga suave esta semana cerca del trabajo y reservar antes de que se llene"
- **Persona B:** Diego, 47, JTBD "comparar el estudio con otros que ya vi y entender si es para mi nivel sin tener que llamar ni registrarme"

## Restricciones
- **languages:** [es-AR]
- **browsers:** [Chrome, Safari, Firefox últimas 2 versiones]
- **brandTokens:** core/design-system.md

## Flags
- maps: true
- auth: false
- i18n: false
- forms: true

## Fuera de scope
- Pago en línea (la reserva confirma sin pagar; el pago es en el estudio)
- Sistema de membresías o paquetes
- Blog o contenido editorial
- App nativa

## Métricas objetivo
- LCP < 2.5s en 3G simulado
- ≥ 1 reserva completada por cada 5 visitantes únicos de la landing
- 0 errores bloqueantes en el flujo "encontrar → ver horarios → reservar"
