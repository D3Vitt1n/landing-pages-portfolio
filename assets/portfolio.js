const menu = document.querySelector('.menu-button');
const links = document.querySelector('#navigation-links');
const mobile = window.matchMedia('(max-width: 800px)');
function resetMenu() {
  if (!menu || !links) return;
  links.hidden = mobile.matches;
  menu.setAttribute('aria-expanded', String(!links.hidden));
}
if (menu && links) {
  resetMenu();
  mobile.addEventListener('change', resetMenu);
  menu.addEventListener('click', () => {
    links.hidden = !links.hidden;
    menu.setAttribute('aria-expanded', String(!links.hidden));
  });
  links.addEventListener('click', (event) => {
    if (event.target.closest('a') && mobile.matches) resetMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && !links.hidden) {
      resetMenu(); menu.focus();
    }
  });
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
const progress = document.querySelector('.reading-progress');
let framePending = false;
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0})`;
  framePending = false;
}
window.addEventListener('scroll', () => {
  if (!framePending) { framePending = true; requestAnimationFrame(updateProgress); }
}, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();
