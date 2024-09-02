// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero section animations
  gsap.from('.herobody h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  gsap.from('.herobody p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out'
  });
  
  gsap.from('.whybutton', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.7,
    ease: 'power3.out'
  });
  
  gsap.from('.heroimg', {
    duration: 1.5,
    x: '100%',
    opacity: 0,
    ease: 'power3.out'
  });
  
  // Scroll animations
  gsap.utils.toArray('.detailscontainer, .details2container, .details3container').forEach(section => {
    gsap.from(section.querySelectorAll('h1, h2, p, ul'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });
  
  // Parallax effect for hero images
  gsap.to('.heroimg2, .heroimg3, .heroimg4', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.maincontainer',
      scrub: true
    }
  });
  
  // Navbar background change on scroll
  const navbar = document.querySelector('.navcontainer');
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'navcontainer--scrolled', targets: navbar}
  });


    document.addEventListener("DOMContentLoaded", function() {
        const heroImg = document.querySelector('.heroimg');
        if (heroImg) {
            heroImg.classList.add('visible');
        }
    });

