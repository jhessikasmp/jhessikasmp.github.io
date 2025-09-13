function toggleMenu() {
  const nav = document.querySelector('.main-nav');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Fecha o menu quando clicar em um link
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Fecha o menu quando clicar fora dele
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.main-nav');
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.site-header');

  if (!header.contains(e.target)) {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
