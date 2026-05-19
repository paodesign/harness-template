/* ==========================================================================
   FORM-VALIDATION.JS — Patagónica Propiedades
   Accessible form validation on blur
   ========================================================================== */

'use strict';

const FormValidator = {
  forms: [],

  init() {
    this.forms = document.querySelectorAll('[data-validate]');
    this.forms.forEach((form) => this.bindForm(form));
  },

  bindForm(form) {
    const fields = form.querySelectorAll('[data-required], [data-type]');

    // Validate on blur
    fields.forEach((field) => {
      field.addEventListener('blur', () => {
        this.validateField(field);
      });

      // Clear error on input
      field.addEventListener('input', () => {
        const wrapper = field.closest('.form-field');
        if (wrapper && wrapper.classList.contains('form-field--has-error')) {
          wrapper.classList.remove('form-field--has-error');
          field.classList.remove('input--error');
          field.removeAttribute('aria-invalid');
        }
      });
    });

    // Validate on submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      fields.forEach((field) => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      if (isValid) {
        this.handleSubmit(form);
      } else {
        // Focus first error
        const firstError = form.querySelector('.form-field--has-error input, .form-field--has-error textarea, .form-field--has-error select');
        if (firstError) firstError.focus();
      }
    });
  },

  validateField(field) {
    const wrapper = field.closest('.form-field');
    const errorEl = wrapper?.querySelector('.form-field__error');
    const value = field.value.trim();

    let errorMessage = '';

    // Required check
    if (field.hasAttribute('data-required') && !value) {
      const label = wrapper?.querySelector('.form-field__label')?.textContent?.replace(' (obligatorio)', '').replace(' *', '').trim();
      errorMessage = `${label || 'Este campo'} es obligatorio.`;
    }

    // Type-specific validation
    if (value && field.dataset.type) {
      switch (field.dataset.type) {
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage = 'Ingresá un email válido. Ej: nombre@email.com';
          }
          break;
        case 'phone':
          if (!/^[\d\s\-\+\(\)]{7,20}$/.test(value)) {
            errorMessage = 'Ingresá un número de teléfono válido.';
          }
          break;
      }
    }

    // Apply or clear error
    if (errorMessage) {
      this.showError(field, wrapper, errorEl, errorMessage);
      return false;
    } else {
      this.clearError(field, wrapper);
      return true;
    }
  },

  showError(field, wrapper, errorEl, message) {
    if (wrapper) wrapper.classList.add('form-field--has-error');
    field.classList.add('input--error');
    field.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'flex';
      const errorId = errorEl.id || `error-${field.id || Math.random().toString(36).slice(2)}`;
      errorEl.id = errorId;
      field.setAttribute('aria-describedby', errorId);
    }
  },

  clearError(field, wrapper) {
    if (wrapper) wrapper.classList.remove('form-field--has-error');
    field.classList.remove('input--error');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  },

  handleSubmit(form) {
    // Show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    // Simulate form submission (in production, this would be a real POST)
    setTimeout(() => {
      // Create success message
      const successMsg = document.createElement('div');
      successMsg.className = 'form-message form-message--success';
      successMsg.setAttribute('role', 'alert');
      successMsg.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>¡Tu consulta fue enviada con éxito! Te contactaremos a la brevedad.</span>
      `;

      form.reset();
      form.prepend(successMsg);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }

      // Remove message after 8 seconds
      setTimeout(() => {
        successMsg.remove();
      }, 8000);
    }, 1500);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  FormValidator.init();
});
