/* ==========================================================================
   FILTERS.JS — Patagónica Propiedades
   Client-side filtering for property listing
   ========================================================================== */

'use strict';

const Filters = {
  properties: [],
  activeFilters: {
    tipo: null,
    operacion: null,
    zona: null,
    precioMin: null,
    precioMax: null,
    dormitorios: null,
  },

  init() {
    const dataEl = document.getElementById('properties-data');
    if (!dataEl) return;

    try {
      this.properties = JSON.parse(dataEl.textContent);
    } catch (e) {
      return;
    }

    this.bindEvents();
    this.render(this.properties);
  },

  bindEvents() {
    // Tag filters (tipo, operacion)
    document.querySelectorAll('[data-filter]').forEach((tag) => {
      tag.addEventListener('click', () => {
        const filterType = tag.dataset.filter;
        const filterValue = tag.dataset.value;

        // Toggle active state
        if (this.activeFilters[filterType] === filterValue) {
          this.activeFilters[filterType] = null;
          tag.classList.remove('is-active');
        } else {
          // Remove active from siblings
          document
            .querySelectorAll(`[data-filter="${filterType}"]`)
            .forEach((t) => t.classList.remove('is-active'));
          this.activeFilters[filterType] = filterValue;
          tag.classList.add('is-active');
        }

        this.applyFilters();
      });
    });

    // Select filters
    document.querySelectorAll('[data-filter-select]').forEach((select) => {
      select.addEventListener('change', () => {
        const filterType = select.dataset.filterSelect;
        this.activeFilters[filterType] = select.value || null;
        this.applyFilters();
      });
    });

    // Price range inputs
    const precioMin = document.getElementById('filter-precio-min');
    const precioMax = document.getElementById('filter-precio-max');

    if (precioMin) {
      precioMin.addEventListener('change', () => {
        this.activeFilters.precioMin = precioMin.value ? Number(precioMin.value) : null;
        this.applyFilters();
      });
    }

    if (precioMax) {
      precioMax.addEventListener('change', () => {
        this.activeFilters.precioMax = precioMax.value ? Number(precioMax.value) : null;
        this.applyFilters();
      });
    }

    // Clear filters
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAll());
    }

    // Mobile filter toggle
    const filterToggle = document.getElementById('filters-toggle-btn');
    const filtersPanel = document.getElementById('filters-panel');
    const filtersOverlay = document.getElementById('filters-overlay');

    if (filterToggle && filtersPanel) {
      filterToggle.addEventListener('click', () => {
        filtersPanel.classList.toggle('is-open');
        if (filtersOverlay) filtersOverlay.classList.toggle('is-visible');
        document.body.style.overflow = filtersPanel.classList.contains('is-open') ? 'hidden' : '';
      });

      if (filtersOverlay) {
        filtersOverlay.addEventListener('click', () => {
          filtersPanel.classList.remove('is-open');
          filtersOverlay.classList.remove('is-visible');
          document.body.style.overflow = '';
        });
      }
    }

    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => this.applyFilters());
    }
  },

  applyFilters() {
    let filtered = [...this.properties];

    const { tipo, operacion, zona, precioMin, precioMax, dormitorios } = this.activeFilters;

    if (tipo) filtered = filtered.filter((p) => p.tipo === tipo);
    if (operacion) filtered = filtered.filter((p) => p.operacion === operacion);
    if (zona) filtered = filtered.filter((p) => p.zona === zona);
    if (precioMin) filtered = filtered.filter((p) => p.precio >= precioMin);
    if (precioMax) filtered = filtered.filter((p) => p.precio <= precioMax);
    if (dormitorios) filtered = filtered.filter((p) => p.dormitorios >= Number(dormitorios));

    // Sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      const sortValue = sortSelect.value;
      if (sortValue === 'precio-asc') filtered.sort((a, b) => a.precio - b.precio);
      else if (sortValue === 'precio-desc') filtered.sort((a, b) => b.precio - a.precio);
      else if (sortValue === 'superficie') filtered.sort((a, b) => b.superficie - a.superficie);
    }

    this.render(filtered);
    this.updateCount(filtered.length);
  },

  clearAll() {
    Object.keys(this.activeFilters).forEach((key) => {
      this.activeFilters[key] = null;
    });

    document.querySelectorAll('[data-filter]').forEach((tag) => {
      tag.classList.remove('is-active');
    });

    document.querySelectorAll('[data-filter-select]').forEach((select) => {
      select.value = '';
    });

    const precioMin = document.getElementById('filter-precio-min');
    const precioMax = document.getElementById('filter-precio-max');
    if (precioMin) precioMin.value = '';
    if (precioMax) precioMax.value = '';

    this.applyFilters();
  },

  updateCount(count) {
    const countEl = document.getElementById('results-count');
    if (countEl) {
      countEl.textContent = count === 1
        ? 'Mostrando 1 propiedad'
        : `Mostrando ${count} propiedades`;
    }
  },

  render(properties) {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;

    if (properties.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state__icon">🏠</div>
          <h3 class="empty-state__title">No encontramos propiedades</h3>
          <p class="empty-state__text">Probá ampliando tu búsqueda o limpiando los filtros.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = properties.map((p) => this.cardTemplate(p)).join('');
  },

  cardTemplate(p) {
    const badgeClass =
      p.operacion === 'Venta'
        ? 'badge--venta'
        : p.operacion === 'Alquiler'
          ? 'badge--alquiler'
          : 'badge--temporal';

    return `
      <article class="property-card">
        <a href="detalle.html?id=${p.id}" class="property-card__image-wrapper">
          <img src="${p.imagen}" alt="${p.titulo}" class="property-card__image"
               width="400" height="300" loading="lazy">
          <span class="badge ${badgeClass} property-card__badge">${p.operacion}</span>
        </a>
        <div class="property-card__body">
          <span class="property-card__price">USD ${p.precio.toLocaleString('es-AR')}</span>
          <h3 class="property-card__title">
            <a href="detalle.html?id=${p.id}">${p.titulo}</a>
          </h3>
          <span class="property-card__location">
            <svg class="icon icon--sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${p.ubicacion}
          </span>
          <div class="property-card__specs">
            ${p.dormitorios ? `<span class="property-card__spec"><strong>${p.dormitorios}</strong> Dorm.</span>` : ''}
            ${p.banos ? `<span class="property-card__spec"><strong>${p.banos}</strong> Baños</span>` : ''}
            ${p.superficie ? `<span class="property-card__spec"><strong>${p.superficie}</strong> m²</span>` : ''}
          </div>
        </div>
      </article>
    `;
  },
};

document.addEventListener('DOMContentLoaded', () => {
  Filters.init();
});
