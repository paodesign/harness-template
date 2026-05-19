/* ==========================================================================
   MAIN.JS — Patagónica Propiedades
   Core functionality: navigation, scroll behavior, WhatsApp
   ========================================================================== */

'use strict';

/**
 * Mobile Navigation Controller
 */
const Nav = {
  nav: null,
  overlay: null,
  hamburger: null,
  closeBtn: null,

  init() {
    this.nav = document.getElementById('main-nav');
    this.overlay = document.getElementById('nav-overlay');
    this.hamburger = document.getElementById('hamburger-btn');
    this.closeBtn = document.getElementById('nav-close-btn');

    if (!this.nav || !this.hamburger) return;

    this.hamburger.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    // Close on nav link click (mobile)
    this.nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => this.close());
    });
  },

  open() {
    this.nav.classList.add('is-open');
    if (this.overlay) this.overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    this.nav.querySelector('a, button')?.focus();
  },

  close() {
    this.nav.classList.remove('is-open');
    if (this.overlay) this.overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    this.hamburger?.focus();
  },
};

/**
 * Header scroll behavior
 */
const Header = {
  header: null,

  init() {
    this.header = document.getElementById('site-header');
    if (!this.header) return;

    let lastScroll = 0;
    const threshold = 10;

    window.addEventListener(
      'scroll',
      () => {
        const currentScroll = window.scrollY;
        if (currentScroll > threshold) {
          this.header.classList.add('is-scrolled');
        } else {
          this.header.classList.remove('is-scrolled');
        }
        lastScroll = currentScroll;
      },
      { passive: true }
    );
  },
};

/**
 * Smooth scroll for anchor links
 */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  },
};

/**
 * Animate elements on scroll (intersection observer)
 */
const ScrollReveal = {
  init() {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  },
};

/**
 * Initialize all modules
 */
document.addEventListener('DOMContentLoaded', () => {
  Nav.init();
  Header.init();
  SmoothScroll.init();
  ScrollReveal.init();
});
