# Research — Patagónica Propiedades

> **Blueprint Técnico**: No se escribe código que dependa de un recurso externo sin que esté documentado acá.

---

## APIs Externas

### Google Maps Embed
- **Uso**: Mapa de propiedades y oficina
- **Tipo**: iframe embed (no requiere API key para embed básico)
- **Oficina**: Cerro Bayo 69, Villa La Angostura, Neuquén, Argentina
- **Formato**: `https://www.google.com/maps/embed?pb=!1m18!...` (usar embed de Google Maps)
- **Nota**: Para prototipo usar iframe genérico de Villa La Angostura

### WhatsApp Business Link
- **Uso**: Botón contacto directo (flotante en todas las páginas)
- **Tipo**: Deep link (sin API)
- **Número Ventas**: `5492944231321`
- **Número Alquileres**: `5492944728165`
- **Formato**: `https://wa.me/5492944231321?text=Hola%2C%20quiero%20consultar%20por%20una%20propiedad`
- **Estado**: ✅ Verificado en sitio actual

### Google Fonts
- **Fuentes**: Poppins (600, 700), Inter (400, 500)
- **Carga**: `<link>` con preconnect
- **Estado**: ✅ Verificado

### Google Analytics 4
- **Uso**: Tracking existente (mantener mismo tag)
- **Nota**: Measurement ID como variable de entorno
- **Estado**: Pendiente — solicitar ID al cliente

### Instagram
- **Perfil**: @patagonicapropiedades
- **URL**: https://www.instagram.com/patagonicapropiedades
- **Estado**: ✅ Verificado

## Recursos Verificados
| Recurso | Estado |
|---------|--------|
| Google Maps Embed | ✅ Verificado (Villa La Angostura) |
| WhatsApp deep link (Ventas) | ✅ Verificado: wa.me/5492944231321 |
| WhatsApp deep link (Alquileres) | ✅ Verificado: wa.me/5492944728165 |
| Google Fonts | ✅ Verificado |
| Instagram | ✅ Verificado |
| GA4 | ⚠️ Pendiente ID |

## Datos del Sitio Actual
- **Plataforma**: Desarrollado por Brokian (plataforma inmobiliaria)
- **Navegación actual**: Compra (dropdown por tipo), Vende, Alquila, Desarrollos, Nuestra Historia
- **Filtros actuales**: Ubicación, Tipo de propiedad, Tipo de operación, Palabras clave
- **Ordenamiento**: Por recientes
- **Paginación**: 10 resultados por página
