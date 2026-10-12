# 261012 — Estudio Jurídico de Familia, Viña del Mar

Sitio institucional sobrio, accesible y responsivo para un estudio de abogadas
de familia en Viña del Mar, Chile.

Demo funcional con datos simulados: las consultas del formulario se guardan en
`localStorage` y el banner de cookies recuerda la preferencia del usuario.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Sí-4CAF50)

## Vista previa

![Captura del sitio](https://via.placeholder.com/800x450/1E293B/C5A880?text=Demo+Estudio+Familia)

## Características

- ✅ 5 páginas HTML independientes con SEO individual (título + meta description).
- ✅ Datos estructurados JSON-LD (`LegalService`) para negocio local.
- ✅ Menú responsivo con indicador visual de sección activa.
- ✅ Formulario de contacto que guarda consultas en `localStorage`.
- ✅ Banner de cookies con preferencia persistente.
- ✅ Acordeón de preguntas frecuentes accesible (teclado + mouse).
- ✅ Mobile-first, sin desbordes horizontales.
- ✅ Sin dependencias de build (HTML + CSS + JS puros).
- ✅ Sin texto lorem ipsum: contenido real orientado al público chileno.

## Cómo arrancar

### Opción 1 — Abrir directo
Descarga o clona el repositorio y abre `index.html` con doble clic en cualquier navegador moderno.

### Opción 2 — Servidor local (recomendado)
```bash
git clone https://github.com/Gertecin/261012-EstudioJuridicoChile.git
cd 261012-EstudioJuridicoChile
python -m http.server 8000
```
Luego abre http://localhost:8000

## Estructura del proyecto

```
261012-EstudioJuridicoChile/
├── README.md
├── LICENSE
├── .gitignore
├── index.html                 # Inicio
├── sobre-nosotras.html        # Equipo y valores
├── areas.html                 # Áreas de práctica
├── preguntas-frecuentes.html  # Acordeón FAQ
├── contacto.html              # Formulario + info
└── assets/
    ├── styles.css             # Estilos globales (mobile-first)
    └── app.js                 # Navegación, formulario, cookies, FAQ
```

## Paleta e identidad

| Rol              | Color     |
|------------------|-----------|
| Azul petróleo    | `#1E293B` |
| Gris pizarra     | `#475569` |
| Dorado / trigo   | `#C5A880` |
| Blanco roto      | `#F8FAFC` |
| Grafito          | `#0F172A` |

Tipografías: **Playfair Display** (títulos) + **Plus Jakarta Sans** (cuerpos), vía Google Fonts.

## Próximos pasos (fuera de esta demo)

- [ ] Conectar el formulario a un backend o servicio de correo del estudio.
- [ ] Reemplazar los textos legales marcadores (`términos`, `privacidad`) por los definitivos.
- [ ] Desplegar en el dominio final (GitHub Pages, Netlify o Vercel).
- [ ] Agregar favicon y Open Graph images.

## Sitio en línea

Una vez activado GitHub Pages, el sitio quedará disponible en:
👉 https://gertecin.github.io/261012-EstudioJuridicoChile/

## Licencia

MIT © Montenegro & Asociadas
