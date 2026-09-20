const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#quote-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name').trim().split(' ')[0];
  status.textContent = `Thanks, ${name}! This demo request is ready to connect to your inbox.`;
  form.reset();
});
