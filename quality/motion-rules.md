# Motion Rules

## Reglas
- Toda animación respeta `@media (prefers-reduced-motion: reduce)`.
- En `reduce`: las transiciones quedan en ≤ 0.01s (efectivamente off).
- Animaciones de loop infinito solo si son ≤ 5s de ciclo y aportan info de estado.
- Parallax y autoplay video: off en reduced-motion.
- Cero animaciones de entrada en contenido crítico (atrasan LCP).
