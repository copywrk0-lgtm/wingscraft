(() => {
  const nav = document.getElementById('nav');
  const glow = document.querySelector('.cursor-glow');
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setMenu = (open) => {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.toggle('open', open);
    nav?.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  if (isDesktop.matches) {
    window.addEventListener('pointermove', (e) => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  menuBtn?.addEventListener('click', () => setMenu(!mobileMenu?.classList.contains('open')));
  mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Smooth wheel scrolling is desktop-only. Native scrolling feels better and performs better on phones.
  if (!reducedMotion && isDesktop.matches && window.Lenis) {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: .9 });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  const reveal = (el, delay = 0) => {
    if (reducedMotion) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      return;
    }
    if (window.anime) {
      anime({ targets: el, opacity: [0,1], translateY: [18,0], duration: 720, delay, easing: 'easeOutExpo' });
    } else {
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const group = entry.target.parentElement?.querySelectorAll('.reveal') || [];
      const idx = [...group].indexOf(entry.target);
      reveal(entry.target, Math.max(0, idx) * 45);
      io.unobserve(entry.target);
    }), { threshold: .08, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => reveal(el));
  }

  // Parallax is intentionally desktop-only so the mobile experience stays smooth.
  if (!reducedMotion && isDesktop.matches) {
    const heroMedia = document.querySelector('.hero-media');
    const pageHero = document.querySelector('.page-hero-media');
    const manifesto = document.querySelector('.manifesto-image');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (heroMedia && y < innerHeight * 1.2) heroMedia.style.transform = `scale(1.05) translateY(${y * .055}px)`;
      if (pageHero && y < innerHeight * 1.2) pageHero.style.transform = `scale(1.04) translateY(${y * .04}px)`;
      if (manifesto) {
        const r = manifesto.parentElement.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) manifesto.style.transform = `scale(1.06) translateY(${(-r.top - innerHeight / 2) * .018}px)`;
      }
    }, { passive: true });
  }
})();
