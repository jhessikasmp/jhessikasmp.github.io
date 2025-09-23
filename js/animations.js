// Simple scroll-reveal and animation initializer

document.addEventListener('DOMContentLoaded', () => {
  // Elements to reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.project-card, .stack-card, .about-intro, .contact-section .container, .demo-container'
  );

  revealTargets.forEach((el) => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // Desktop-only nav entrance reveal
  try {
    if (window.matchMedia('(min-width: 992px)').matches) {
      const mainNav = document.querySelector('.main-nav');
      if (mainNav) {
        // Allow layout to settle, then add class
        requestAnimationFrame(() => mainNav.classList.add('is-ready'));
      }
    }
  } catch {}

  // Scroll spy (only on index where sections exist)
  try {
    const sectionIds = ['hero', 'about', 'projects', 'contact'];
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);
    const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
    if (sections.length && navLinks.length) {
      const linkFor = (id) => navLinks.find(a => (a.getAttribute('href') || '').endsWith(`#${id}`));
      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          const link = linkFor(id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0.1 });
      sections.forEach(sec => spyObserver.observe(sec));
    }
  } catch {}

  // Back to top button
  try {
    const btn = document.getElementById('backToTop');
    if (btn) {
      const onScroll = () => {
        if (window.scrollY > 400) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
          window.scrollTo(0, 0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  } catch {}
});
