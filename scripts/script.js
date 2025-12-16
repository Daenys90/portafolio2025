document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector('i');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';

    if (isDark) {
      body.removeAttribute('data-theme');
      icon.classList.replace('fa-sun', 'fa-moon');
      toggleBtn.setAttribute('aria-pressed', 'false');
    } else {
      body.setAttribute('data-theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
      toggleBtn.setAttribute('aria-pressed', 'true');
    }
  });
});

// formularioóoogit 
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    formStatus.textContent = 'Gracias por contactarme, te responderé a la brevedad';
    formStatus.className = 'text-success mt-3';
    form.reset();
  });
}

