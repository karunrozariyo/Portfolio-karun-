// Fade-in on scroll
function animateOnScroll() {
  document.querySelectorAll('.animate-fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.style.animationPlayState = 'running';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();

  // Typewriter effect for hero subtitle
  const typewriter = document.querySelector('.animated-typewriter');
  if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = '';
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }
    type();
  }

  // tsparticles animated background
  if (window.tsParticles && document.getElementById('tsparticles')) {
    tsParticles.load('tsparticles', {
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: ['#5bc0f8', '#a259f7', '#3fe0c5'] },
        shape: { type: 'circle' },
        opacity: { value: 0.25 },
        size: { value: { min: 2, max: 5 } },
        move: { enable: true, speed: 1.2, direction: 'none', outModes: { default: 'bounce' } },
        links: { enable: true, color: '#5bc0f8', distance: 120, opacity: 0.15, width: 1 }
      },
      detectRetina: true
    });
  }

  // Bootstrap carousel for testimonials
  if (window.bootstrap && document.getElementById('testimonialCarousel')) {
    new bootstrap.Carousel(document.getElementById('testimonialCarousel'), { interval: 5000, ride: 'carousel' });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Collapse navbar on mobile after click
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      }
    });
  });

  // Interactive hover for skill cards
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

  // Interactive hover for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

  // Highlight active navbar link on scroll
  const sections = ['hero','about','education','skills','projects','papers','workshops','certifications','testimonials','contact'];
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
  function setActiveNav() {
    let scrollPos = window.scrollY + 80;
    let found = false;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPos) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector('.custom-navbar .nav-link[href="#' + sections[i] + '"]');
        if (activeLink) activeLink.classList.add('active');
        found = true;
        break;
      }
    }
    if (!found) navLinks.forEach(link => link.classList.remove('active'));
  }
  setActiveNav();
  window.addEventListener('scroll', setActiveNav);
}); 