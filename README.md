# 261012 — Estudio Jurídico de Familia, Viña del Mar

Sitio institucional sobrio, accesible y responsivo para un estudio de abogadas de familia en Viña del Mar, Chile. Desarrollado con **React + Vite + Tailwind CSS**.

## Características

- ✅ 6 páginas (Inicio, Sobre nosotras, Áreas, Preguntas frecuentes, Contacto, Términos legales).
- ✅ React 18 + React Router para navegación SPA fluida.
- ✅ Estilos fieles al briefing (azul petróleo, dorado, blanco roto, Playfair Display + Plus Jakarta Sans).
- ✅ Menú responsivo con indicador visual de sección activa.
- ✅ Formulario de contacto con validación y guardado en `localStorage`.
- ✅ Banner de cookies con preferencia persistente.
- ✅ Acordeón de preguntas frecuentes accesible (teclado y mouse).
- ✅ Mobile-first, sin desbordes horizontales.
- ✅ Sin texto de relleno (lorem ipsum).

---

## Cómo arrancar en local

### Requisitos
- **Node.js 18+** (descargar en https://nodejs.org)
- **npm** (viene incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Gertecin/261012-EstudioJuridicoChile.git
cd 261012-EstudioJuridicoChile

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

> **Nota:** El servidor arrancará en http://localhost:5173/261012-EstudioJuridicoChile/ (la ruta base está configurada en vite.config.js).

---

## Comandos Relevantes Bash

```bash
# Compilar para producción (genera carpeta dist/)
npm run build

# Previsualizar la build de producción
npm run preview
```

---

## Configuración importante para el despliegue

> **Importante:** `base: '/261012-EstudioJuridicoChile/'` es necesario en el archivo `vite.config.js` para que GitHub Pages resuelva bien las rutas. Para cambiar más adelante a un dominio propio, cámbialo a `'/'`.

---

## Gestión de claves usadas en LocalStorage

### Claves que se usan
La aplicación usa dos claves en `localStorage` para la gestión de estado local:

| Clave | Contenido | Ejemplo |
|-------|-----------|---------|
| `estudio.consultas` | Array JSON de consultas enviadas desde el formulario | `[{"nombre":"Ana","email":"ana@mail.cl","telefono":"","area":"Divorcio","mensaje":"...","privacidad":true,"fecha":"2025-01-15T10:30:00.000Z"}]` |
| `estudio.cookies` | Preferencia del usuario sobre cookies | `"accepted"` o `"rejected"` |

### Cómo ver las claves
1. Abre el sitio en tu navegador.
2. Presiona **F12** (o clic derecho → Inspeccionar).
3. Ve a la pestaña **Application** (Aplicación).
4. En el panel izquierdo, expande **Local Storage** y selecciona el dominio.
5. Verás las dos claves con sus valores actuales.

### Cómo vaciar / reiniciar las claves
Abre la pestaña **Console** (dentro de las herramientas de desarrollador) y ejecuta:

```javascript
// Vaciar solo las consultas
localStorage.removeItem('estudio.consultas')

// Vaciar solo la preferencia de cookies (el banner volverá a aparecer)
localStorage.removeItem('estudio.cookies')

// Vaciar TODO el localStorage del sitio
localStorage.clear()
```

---

## Estructura del Proyecto

```text
261012-EstudioJuridicoChile/
├── README.md
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx              # Punto de entrada + Router
    ├── App.jsx               # Layout principal + definición de rutas
    ├── styles.css            # Estilos originales adaptados
    ├── components/
    │   ├── Header.jsx        # Cabecera + menú móvil
    │   ├── Footer.jsx        # Pie de página con enlaces legales
    │   ├── CookieBanner.jsx  # Banner de consentimiento de cookies
    │   ├── FAQ.jsx           # Acordeón de preguntas frecuentes
    │   └── ContactForm.jsx   # Formulario + lógica de localStorage
    └── pages/
        ├── Home.jsx
        ├── SobreNosotras.jsx
        ├── Areas.jsx
        ├── PreguntasFrecuentes.jsx
        ├── Contacto.jsx
        └── TerminosLegales.jsx
```
