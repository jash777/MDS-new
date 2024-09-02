gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader-container').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-container').style.display = 'none';
        }, 500);
    }, 1000);

    gsap.from('.logo', {opacity: 0, y: -50, duration: 1, ease: 'power3.out'});
    gsap.from('.navitems li', {opacity: 0, y: -50, duration: 1, stagger: 0.2, ease: 'power3.out'});
    gsap.from('.navbutton', {opacity: 0, y: -50, duration: 1, delay: 0.8, ease: 'power3.out'});

    gsap.to('.herobody p, .herobody h1, .whybutton', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.herocontainer',
            start: 'top 80%',
        }
    });

    gsap.to('.main-image-container', {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.herocontainer',
            start: 'top 80%',
        }
    });

    gsap.to('.detailsheader h2, .detailsheader h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.detailscontainer',
            start: 'top 80%',
        }
    });

    gsap.to('.detailslistbody li', {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.detailscontainer',
            start: 'top 80%',
        }
    });

    gsap.to('.main-image-container1', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.detailscontainer',
            start: 'top 80%',
        }
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        gsap.to(link, {color: '#A2B3D4', duration: 0.3});
    });
    link.addEventListener('mouseout', () => {
        gsap.to(link, {color: 'black', duration: 0.3});
    });
});



// the button after scrolling down 100px
    // the button after scrolling down 100px
    window.onscroll = function() {
        toggleBackToTopButton();
    };
    
    function toggleBackToTopButton() {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }
    
    // Scroll back to top smoothly
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    

    const backToTopBtn = document.getElementById('backToTopBtn');

function toggleButtonVisibility() {
  if (window.pageYOffset > 300) {
    if (!backToTopBtn.classList.contains('show')) {
      backToTopBtn.classList.add('show');
      setTimeout(() => {
        backToTopBtn.classList.add('fade-in');
      }, 10);
    }
  } else {
    backToTopBtn.classList.remove('fade-in');
    backToTopBtn.classList.add('fade-out');
    setTimeout(() => {
      backToTopBtn.classList.remove('show', 'fade-out');
    }, 300);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', toggleButtonVisibility);
backToTopBtn.addEventListener('click', scrollToTop);