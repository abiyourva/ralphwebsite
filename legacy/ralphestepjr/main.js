// ── ralphestepjr.com shared scripts ──────────────────────────

// Mobile menu toggle
(function () {
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i === 0) s.style.transform = 'translateY(7px) rotate(45deg)';
        if (i === 1) s.style.opacity = '0';
        if (i === 2) s.style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        s.style.transform = '';
        s.style.opacity = '';
      }
    });
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  }));
})();

// Active nav highlight
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Simple email form handler (shows success message)
(function () {
  document.querySelectorAll('.email-capture-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      const btn   = this.querySelector('button');
      if (!input || !input.value) return;
      btn.textContent = 'You\'re in! ✓';
      btn.disabled = true;
      btn.style.background = '#2A6049';
      input.disabled = true;
      // TODO: Wire to your email provider (ConvertKit, MailerLite, etc.)
      console.log('Email captured:', input.value);
    });
  });
})();

// Contact form handler
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent! ✓';
    btn.disabled = true;
    btn.style.background = '#2A6049';
    // TODO: Wire to Formspree, Netlify Forms, or your own endpoint
    // e.g. fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(form) })
    console.log('Form submitted');
  });
})();
