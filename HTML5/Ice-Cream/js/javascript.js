// Initialize AOS (Animate On Scroll) library
AOS.init();

  // Mobile menu toggle
  const toggler = document.getElementById('navToggler');
  const navCollapse = document.getElementById('navbarNav');
  if(toggler) {
    toggler.addEventListener('click', () => {
      navCollapse.classList.toggle('show');
    });
  }

  // Simple testimonial carousel (no external libraries)
  const slides = document.querySelectorAll('.testimonial_box');
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  document.getElementById('nextSlide')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
  document.getElementById('prevSlide')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
  showSlide(0);
