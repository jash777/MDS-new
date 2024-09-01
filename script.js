document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'navbar', file: './Navbar.html' },
        { id: 'hero', file: './hero.html' },
        { id: '2ndpage', file: './2ndpage.html' },
        { id: 'team', file: './team.html' },
        { id: '3rdpage', file: './3rdpage.html' },
        { id: '4thpage', file: './4thpage.html' },
        { id: '5thpage', file: './5thpage.html' },
        { id: 'footer', file: './footer.html' }

    ];

    const pageTransition = document.querySelector('.page-transition');
    const body = document.body;

    // Show logo
    setTimeout(() => {
        pageTransition.classList.add('page-transition--loaded');
    }, 100);

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const section = sections.find(s => s.id === sectionId);
                if (section) {
                    loadSection(section);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    function loadSection(section) {
        return fetch(section.file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section.id).innerHTML = data;
            })
            .catch(error => console.error('Error loading ' + section.file + ':', error));
    }

    // Load navbar and hero immediately
    Promise.all([
        loadSection(sections.find(s => s.id === 'navbar')),
        loadSection(sections.find(s => s.id === 'hero'))
    ]).then(() => {
        // After navbar and hero are loaded, set up observers for other sections
        sections.forEach(section => {
            if (section.id !== 'navbar' && section.id !== 'hero') {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.observe(element);
                }
            }
        });

        // Hide transition and show content
        setTimeout(() => {
            pageTransition.classList.add('page-transition--hidden');
            body.classList.add('content-loaded');
        }, 500);
    });
});


let currentCardIndex = 0;

// Function to slide card left
function slideCardLeft() {
    const cards = document.querySelectorAll('.card');
    
    if (currentCardIndex < cards.length) {
        // Slide and fade out the current card
        cards[currentCardIndex].classList.add('slide-left');

        // Move to the next card for the next click
        currentCardIndex++;
    }

    // Reset when all cards are done
    if (currentCardIndex === cards.length) {
        setTimeout(() => {
            // Reset the animation classes and show all cards again
            cards.forEach(card => {
                card.classList.remove('slide-left');
                card.style.opacity = '1'; // Reset opacity
                card.style.transform = 'translateX(0)'; // Reset position
            });
            currentCardIndex = 0; // Reset index to loop through again
        }, 600); // Delay matching animation duration
    }
}
