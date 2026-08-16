// Utility for scroll/reveal/floating/smooth scroll effects

export function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}


export function blurOnLoad() {
  const blurLoad = document.querySelector('.blur-load');

  if (blurLoad) {
    blurLoad.classList.add('blur-active');

    setTimeout(() => {
      blurLoad.classList.remove('blur-active');
    }, 300);
  }
}


export function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {

      const targetId = this.getAttribute('href');

      // Ignore empty "#" links
      if (!targetId || targetId === '#') {
        return;
      }

      const targetElement = document.querySelector(targetId);

      // If the target section doesn't exist, don't interfere
      if (!targetElement) {
        return;
      }

      e.preventDefault();

      const blurLoad = document.querySelector('.blur-load');

      if (blurLoad) {
        blurLoad.classList.add('blur-active');
      }

      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });

        setTimeout(() => {
          if (blurLoad) {
            blurLoad.classList.remove('blur-active');
          }
        }, 300);
      }, 200);
    });
  });
}


export function floatingEffect() {
  // Floating effect is handled by CSS animation (see global.css)
}