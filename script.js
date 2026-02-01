const intro = document.getElementById('intro');
const year = document.getElementById('year');

if (year) year.textContent = String(new Date().getFullYear());

const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

function finishIntro() {
  document.body.classList.add('intro-done');
  intro?.setAttribute('aria-hidden', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
  if (prefersReducedMotion) {
    finishIntro();
    return;
  }

  window.setTimeout(finishIntro, 5000);

  intro?.addEventListener('click', finishIntro, { once: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') finishIntro();
  }, { once: true });
});

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

const customCursor = document.querySelector('.cursor');

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        customCursor.style.opacity = '1';
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    const targets = document.querySelectorAll('a, button, .link-card');
    
    targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            customCursor.classList.add('active');
        });
        target.addEventListener('mouseleave', () => {
            customCursor.classList.remove('active');
        });
    });

    document.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
    });
}
