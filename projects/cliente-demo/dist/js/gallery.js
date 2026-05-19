/* ==========================================================================
   GALLERY.JS — Patagónica Propiedades
   Image gallery with thumbnails and lightbox
   ========================================================================== */

'use strict';

const Gallery = {
  mainImage: null,
  thumbs: [],
  images: [],
  currentIndex: 0,

  init() {
    this.mainImage = document.getElementById('gallery-main-img');
    if (!this.mainImage) return;

    this.thumbs = document.querySelectorAll('.gallery__thumb');
    this.images = Array.from(this.thumbs).map((thumb) => ({
      src: thumb.dataset.full || thumb.querySelector('img').src,
      alt: thumb.querySelector('img').alt,
    }));

    this.bindThumbEvents();
    this.initLightbox();
  },

  bindThumbEvents() {
    this.thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        this.setActive(index);
      });
    });
  },

  setActive(index) {
    this.currentIndex = index;

    // Update main image
    this.mainImage.src = this.images[index].src;
    this.mainImage.alt = this.images[index].alt;

    // Update thumb active state
    this.thumbs.forEach((t) => t.classList.remove('is-active'));
    this.thumbs[index]?.classList.add('is-active');
  },

  initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox__image');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');
    const counter = lightbox.querySelector('.lightbox__counter');

    // Open lightbox on main image click
    const mainWrapper = document.querySelector('.gallery__main');
    if (mainWrapper) {
      mainWrapper.addEventListener('click', () => {
        this.openLightbox(lightbox, lightboxImg, counter);
      });
    }

    // Close
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLightbox(lightbox));
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) this.closeLightbox(lightbox);
    });

    // Navigate
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigateLightbox(-1, lightboxImg, counter);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigateLightbox(1, lightboxImg, counter);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') this.closeLightbox(lightbox);
      if (e.key === 'ArrowLeft') this.navigateLightbox(-1, lightboxImg, counter);
      if (e.key === 'ArrowRight') this.navigateLightbox(1, lightboxImg, counter);
    });
  },

  openLightbox(lightbox, lightboxImg, counter) {
    lightboxImg.src = this.images[this.currentIndex].src;
    lightboxImg.alt = this.images[this.currentIndex].alt;
    if (counter) counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  },

  closeLightbox(lightbox) {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  },

  navigateLightbox(direction, lightboxImg, counter) {
    this.currentIndex =
      (this.currentIndex + direction + this.images.length) % this.images.length;
    lightboxImg.src = this.images[this.currentIndex].src;
    lightboxImg.alt = this.images[this.currentIndex].alt;
    if (counter) counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    this.setActive(this.currentIndex);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  Gallery.init();
});
