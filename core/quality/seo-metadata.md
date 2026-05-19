# SEO y Metadatos — Reglas de Validacion

## Metadata Basica (obligatorio por pagina)
- [ ] `<title>` descriptivo, max **60 caracteres**, unico por pagina
- [ ] `<meta name="description">` max **160 caracteres**, con keyword
- [ ] `<html lang>` correcto, charset UTF-8, viewport
- [ ] `<link rel="canonical">` con URL absoluta

## Headings
- [ ] Un solo `<h1>`, coherente con `<title>`
- [ ] Jerarquia sin saltos (h1 > h2 > h3)

## OpenGraph
- [ ] `og:title`, `og:description`, `og:image` (min 1200x630px), `og:url`, `og:type`
- [ ] Twitter card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

## Structured Data (JSON-LD, si el context.md lo requiere)
| Tipo de sitio | Schema |
|--------------|--------|
| Negocio local | `LocalBusiness` |
| Inmobiliaria | `RealEstateAgent` |
| Portfolio | `Person` + `WebSite` |
| E-commerce | `Product` + `BreadcrumbList` |

## Imagenes para SEO
- [ ] Alt descriptivo en informativas, nombres de archivo descriptivos
- [ ] Imagenes optimizadas (ver performance.md)

## URLs y Links
- [ ] URLs amigables, sin mayusculas ni caracteres especiales
- [ ] Links externos con `rel="noopener noreferrer"` y `target="_blank"`
