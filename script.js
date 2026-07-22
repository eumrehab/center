document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scrolled Class Toggle
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to observe again
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }

  // 4. Contact Log Alerts (Optional feedback for analytics/ux)
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  const kakaoLinks = document.querySelectorAll('.btn-secondary, .cta-kakao-btn');

  phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log('전화문의 상담 연결 시도:', link.href);
    });
  });

  kakaoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log('카카오톡 1:1 상담 연결 시도');
    });
  });


});
