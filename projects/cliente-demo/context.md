# Context — Patagonia Propiedades

> Brief del cliente para prueba piloto del UX Harness Framework v3.

---

## project_name
Patagonia Propiedades — Rediseño web

## objective
Rediseñar el sitio web de Patagonia Propiedades para aumentar las consultas de propiedades en un 30% en los próximos 6 meses. El éxito se mide por: cantidad de formularios de contacto enviados, tiempo promedio en el sitio, y tasa de rebote en la página de listado de propiedades (actualmente 72%, objetivo < 50%).

## target_audience
- **Edad**: 28-55 años
- **Contexto**: Personas buscando comprar, alquilar o invertir en propiedades en Neuquén capital y alrededores. Navegan principalmente desde el celular (68% del tráfico actual) durante horarios de oficina y nocturno
- **Familiaridad tech**: Media — usan WhatsApp, Instagram, MercadoLibre. Esperan poder filtrar, ver fotos y contactar rápido
- **Motivación**: Encontrar propiedades que coincidan con su presupuesto y zona rápidamente, sin tener que llamar para pedir información básica

## deliverables
1. **Home page**: Hero con buscador de propiedades, propiedades destacadas, sección de confianza (años de experiencia, propiedades vendidas), CTA a contacto
2. **Listado de propiedades**: Grilla con filtros (tipo, zona, precio, ambientes), cards de propiedad con foto, precio, ubicación y datos clave
3. **Detalle de propiedad**: Galería de fotos, datos técnicos, mapa de ubicación, formulario de consulta
4. **Página de contacto**: Formulario, WhatsApp directo, mapa de la oficina, horarios
5. **Footer global**: Links, redes sociales, datos de contacto, logo de matrícula

## tone_and_voice
- **Profesional pero cercano**: No somos un banco, somos vecinos que saben de propiedades
- **Directo**: Sin rodeos, información clara y completa
- **Confiable**: Datos concretos, sin promesas vagas
- **Adjetivos de marca**: Confiable, regional, accesible
- **Idioma**: Español rioplatense con voseo ("Encontrá tu próximo hogar", no "Encuentre su próximo hogar")

## constraints
### Técnicas
- HTML + CSS + JS vanilla (sin frameworks — el cliente quiere algo que cualquier dev pueda mantener)
- Hosting en servidor compartido con PHP (no Node)
- Las imágenes de propiedades vienen de una carpeta de Google Drive (no hay CMS por ahora)
- Mobile-first obligatorio (68% tráfico mobile)

### Negocio
- No incluir precios en dólares (solo pesos argentinos)
- El formulario de contacto debe pedir: nombre, teléfono (obligatorio), email (opcional), mensaje
- WhatsApp es el canal principal — debe estar siempre visible
- No usar fotos de stock para propiedades — solo fotos reales del cliente

---

## brand_colors
| Uso | Color | Hex |
|-----|-------|-----|
| Primario (confianza) | Azul petróleo | `#1B4D5C` |
| Primario hover | Azul petróleo oscuro | `#143D49` |
| Primario light | Azul muy claro | `#E8F4F8` |
| Secundario (acción) | Naranja cálido | `#E8722A` |
| Secundario hover | Naranja oscuro | `#D4611F` |

## brand_fonts
- **Títulos**: Poppins (Google Fonts) — weights 600, 700
- **Cuerpo**: Inter (Google Fonts) — weights 400, 500

## competitors
- **remax.com.ar**: Les gusta el buscador con filtros, no les gusta que se siente "genérico" y frío
- **zonaprop.com.ar**: Les gusta la cantidad de info en las cards, no les gusta que es muy sobrecargado
- **Inmobiliarias locales de Neuquén**: La mayoría tiene sitios desactualizados o solo Instagram

## existing_content
- Logo en SVG y PNG (entregado en `/assets/logo/`)
- Fotos de 12 propiedades activas (entregadas en `/assets/propiedades/`)
- Textos de "Quiénes somos" (entregado en `/assets/textos/`)

## analytics
- Tráfico: 2,400 visitas/mes
- Dispositivos: 68% mobile, 24% desktop, 8% tablet
- Páginas más vistas: Home (38%), Listado (29%), Contacto (15%)
- Tasa de rebote: Home 45%, Listado 72%, Detalle 38%
- Tiempo promedio: 1:45 minutos

## integrations
- WhatsApp Business API (link directo a chat)
- Google Maps embed para ubicación de propiedades y oficina
- Google Analytics 4 (ya configurado, mantener el mismo tag)

## deadline
- Entrega de maquetas: semana 1
- Revisión cliente: semana 2
- Ajustes y producción: semana 3
- Go-live: semana 4
