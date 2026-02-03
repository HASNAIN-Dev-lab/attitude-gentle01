// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
