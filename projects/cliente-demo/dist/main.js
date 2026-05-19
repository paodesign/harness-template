/* 
   UX Harness — Logic Implementation
   Client: Patagonia Propiedades
*/

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollEffects();
    initFilterToggle();
});

/**
 * Mobile Filter Toggle
 */
function initFilterToggle() {
    const toggle = document.getElementById('toggle-filters');
    const sidebar = document.getElementById('sidebar-filters');
    
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        const isHidden = window.getComputedStyle(sidebar).display === 'none';
        if (isHidden) {
            sidebar.style.display = 'block';
            toggle.textContent = 'Ocultar Filtros';
        } else {
            sidebar.style.display = 'none';
            toggle.textContent = 'Mostrar Filtros';
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-links');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('is-open');
        
        // Add visual feedback to toggle icon if needed
        toggle.classList.toggle('is-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains('is-open')) {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.toggle('is-open');
            toggle.classList.remove('is-active');
        }
    });
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });
}

/**
 * Property Search Feedback (Simulation)
 */
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        const btn = searchForm.querySelector('button');
        btn.innerHTML = 'Buscando...';
        btn.style.opacity = '0.7';
    });
}

/**
 * Contact Form Validation & Feedback
 */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        // Simulation of loading
        btn.innerHTML = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '✓ Consulta enviada';
            btn.style.backgroundColor = 'var(--color-success)';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });

    // Real-time validation simulation (blur)
    const inputs = contactForm.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.style.borderColor = 'var(--color-error)';
            } else {
                input.style.borderColor = '';
            }
        });
    });
}
