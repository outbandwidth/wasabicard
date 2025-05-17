// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu functionality if needed
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation effects on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .solution-card, .benefit-card, .feature-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check for elements in view on page load
    animateOnScroll();
    
    // Check for elements in view on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .solution-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
});

// Mega Menu Interactions
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.main-menu li a');
    const megaMenus = document.querySelectorAll('.mega-menu');
    const header = document.querySelector('header');
    
    // Initially hide all mega menus
    megaMenus.forEach(menu => {
        menu.style.display = 'none';
        menu.classList.remove('active');
    });
    
    // Show corresponding mega menu on hover over main menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const menuId = this.getAttribute('data-menu');
            const currentMenu = document.getElementById(menuId);
            
            // Hide all menus first
            megaMenus.forEach(menu => {
                menu.style.display = 'none';
                menu.classList.remove('active');
            });
            
            // Show the current menu
            if (currentMenu) {
                currentMenu.style.display = 'block';
                
                // Add active class to the current menu item
                menuItems.forEach(mi => mi.classList.remove('active'));
                this.classList.add('active');
                
                // Force reflow before adding active class for animation
                void currentMenu.offsetWidth;
                currentMenu.classList.add('active');
            }
        });
    });
    
    // Keep mega menu visible when hovering over it
    megaMenus.forEach(menu => {
        menu.addEventListener('mouseenter', function() {
            this.style.display = 'block';
            this.classList.add('active');
        });
        
        menu.addEventListener('mouseleave', function() {
            this.classList.remove('active');
            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Hide after animation completes
            setTimeout(() => {
                if (!this.classList.contains('active')) {
                    this.style.display = 'none';
                }
            }, 300);
        });
    });
    
    // Hide all mega menus when mouse leaves header
    if (header) {
        header.addEventListener('mouseleave', function() {
            megaMenus.forEach(menu => {
                menu.classList.remove('active');
                
                // Hide after animation completes
                setTimeout(() => {
                    if (!menu.classList.contains('active')) {
                        menu.style.display = 'none';
                    }
                }, 300);
            });
            
            // Remove active class from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
        });
    }
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Initialize the answer heights
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
            answer.style.padding = '20px';
        } else {
            answer.style.maxHeight = 0;
            answer.style.padding = '0 20px';
        }
        
        // Add click event to toggle the FAQ item
        question.addEventListener('click', function() {
            // Toggle active class on the clicked item
            const isActive = item.classList.contains('active');
            
            // First, close all FAQ items
            faqItems.forEach(faq => {
                const faqAnswer = faq.querySelector('.faq-answer');
                faq.classList.remove('active');
                faqAnswer.style.maxHeight = 0;
                faqAnswer.style.padding = '0 20px';
            });
            
            // Then, open the clicked item if it was closed before
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
                answer.style.padding = '20px';
            }
        });
    });
    
    // Open the first FAQ item by default
    if (faqItems.length > 0) {
        const firstItem = faqItems[0];
        const firstAnswer = firstItem.querySelector('.faq-answer');
        
        firstItem.classList.add('active');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 40 + 'px';
        firstAnswer.style.padding = '20px';
    }
});

// Feature tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const featuresSections = document.querySelectorAll('.features-section');

    featuresSections.forEach(section => {
        const tabButtons = section.querySelectorAll('.tab-button');
        const featureCards = section.querySelectorAll('.feature-card');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and cards in this section
                tabButtons.forEach(btn => btn.classList.remove('active'));
                featureCards.forEach(card => card.classList.remove('active'));

                // Add active class to clicked button and corresponding card
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                section.querySelector(`#${tabId}-card`).classList.add('active');
            });
        });
    });
}); 