/* ============================================
   Estudio Jurídico de Familia — app.js
   Navegación activa, formulario + localStorage,
   banner de cookies, acordeón FAQ accesible.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFAQ();
  initContactForm();
  initCookieBanner();
});

/* ---------- Menú móvil ---------- */
function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const panel  = document.querySelector('.mobile-menu');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    panel.classList.toggle('open', !open);
  });

  // Cerrar al hacer click en un enlace (móvil)
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('open');
    });
  });
}

/* ---------- Acordeón FAQ accesible ---------- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item, idx) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel   = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    const panelId = 'faq-panel-' + idx;
    panel.id = panelId;
    trigger.setAttribute('aria-controls', panelId);
    trigger.setAttribute('aria-expanded', 'false');
    item.setAttribute('data-open', 'false');

    const toggle = () => {
      const open = item.getAttribute('data-open') === 'true';
      const next = !open;
      item.setAttribute('data-open', String(next));
      trigger.setAttribute('aria-expanded', String(next));
      if (next) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    };

    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/* ---------- Formulario de contacto + localStorage ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.className = 'form-feedback';
    feedback.textContent = '';

    const data = {
      nombre:    (form.nombre.value || '').trim(),
      email:     (form.email.value || '').trim(),
      telefono:  (form.telefono.value || '').trim(),
      area:      form.area.value,
      mensaje:   (form.mensaje.value || '').trim(),
      privacidad: form.privacidad.checked,
      fecha:     new Date().toISOString()
    };

    // Validación mínima
    if (!data.nombre || !data.email || !data.mensaje || !data.privacidad) {
      feedback.classList.add('err');
      feedback.textContent = 'Por favor completá nombre, correo, mensaje y aceptá la política de privacidad.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      feedback.classList.add('err');
      feedback.textContent = 'El correo ingresado no parece válido.';
      return;
    }

    // Guardar en localStorage
    const KEY = 'estudio.consultas';
    let consultas = [];
    try {
      consultas = JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch (_) { consultas = []; }
    consultas.push(data);
    localStorage.setItem(KEY, JSON.stringify(consultas));

    form.reset();
    feedback.classList.add('ok');
    feedback.textContent = 'Gracias, ' + data.nombre + '. Recibimos tu consulta y te contactaremos a la brevedad al correo indicado.';
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ---------- Banner de cookies ---------- */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const KEY = 'estudio.cookies';
  const pref = localStorage.getItem(KEY);
  if (pref) return; // ya respondió

  banner.classList.add('show');

  const accept = banner.querySelector('[data-cookie="accept"]');
  const reject = banner.querySelector('[data-cookie="reject"]');

  const save = (value) => {
    localStorage.setItem(KEY, value);
    banner.classList.remove('show');
  };

  if (accept) accept.addEventListener('click', () => save('accepted'));
  if (reject) reject.addEventListener('click', () => save('rejected'));
}