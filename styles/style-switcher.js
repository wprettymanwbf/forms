/**
 * Dynamic CSS Switcher
 * Allows users to switch between different stylesheets dynamically
 * Stores user preference in localStorage for persistence
 */

(function() {
  'use strict';

  // Configuration
  const STORAGE_KEY = 'selectedStylesheet';
  const DEFAULT_STYLE = 'style1';
  const STYLES = {
    style1: {
      name: 'Professional',
      path: 'styles/style1.css'
    },
    style2: {
      name: 'Dark Mode',
      path: 'styles/style2.css'
    },
    style3: {
      name: 'High Contrast',
      path: 'styles/style3.css'
    }
  };

  /**
   * Get the currently selected style from localStorage
   * @returns {string} The selected style key
   */
  function getSelectedStyle() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && STYLES[stored] ? stored : DEFAULT_STYLE;
  }

  /**
   * Save the selected style to localStorage
   * @param {string} styleKey - The style key to save
   */
  function saveSelectedStyle(styleKey) {
    localStorage.setItem(STORAGE_KEY, styleKey);
  }

  /**
   * Load a stylesheet dynamically
   * @param {string} styleKey - The style key to load
   */
  function loadStylesheet(styleKey) {
    // Check if the style exists
    if (!STYLES[styleKey]) {
      console.error('Style not found:', styleKey);
      return;
    }

    // Remove existing dynamic stylesheet if it exists
    const existingLink = document.getElementById('dynamicStylesheet');
    if (existingLink) {
      existingLink.remove();
    }

    // Create and append new stylesheet link
    const link = document.createElement('link');
    link.id = 'dynamicStylesheet';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = STYLES[styleKey].path;
    
    // Add load event listener for performance tracking
    link.onload = function() {
      console.log('Stylesheet loaded:', STYLES[styleKey].name);
    };
    
    link.onerror = function() {
      console.error('Failed to load stylesheet:', STYLES[styleKey].path);
    };

    document.head.appendChild(link);
  }

  /**
   * Switch to a new stylesheet
   * @param {string} styleKey - The style key to switch to
   */
  function switchStyle(styleKey) {
    loadStylesheet(styleKey);
    saveSelectedStyle(styleKey);
    updateStyleSelector(styleKey);
  }

  /**
   * Update the style selector UI to reflect the current style
   * @param {string} styleKey - The current style key
   */
  function updateStyleSelector(styleKey) {
    const selector = document.getElementById('styleSelect');
    if (selector) {
      selector.value = styleKey;
    }
  }

  /**
   * Create the style switcher UI element
   */
  function createStyleSwitcher() {
    // Check if switcher already exists
    if (document.getElementById('styleSwitcher')) {
      return;
    }

    const container = document.createElement('div');
    container.id = 'styleSwitcher';

    const label = document.createElement('label');
    label.textContent = 'Theme:';
    label.setAttribute('for', 'styleSelect');

    const select = document.createElement('select');
    select.id = 'styleSelect';
    select.setAttribute('aria-label', 'Select theme');

    // Populate select options
    Object.keys(STYLES).forEach(function(key) {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = STYLES[key].name;
      select.appendChild(option);
    });

    // Add change event listener
    select.addEventListener('change', function(e) {
      switchStyle(e.target.value);
    });

    container.appendChild(label);
    container.appendChild(select);
    document.body.appendChild(container);
  }

  /**
   * Initialize the style switcher
   */
  function initStyleSwitcher() {
    // Load the saved or default style
    const selectedStyle = getSelectedStyle();
    loadStylesheet(selectedStyle);

    // Create the UI after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        createStyleSwitcher();
        updateStyleSelector(selectedStyle);
      });
    } else {
      createStyleSwitcher();
      updateStyleSelector(selectedStyle);
    }
  }

  // Initialize when script loads
  initStyleSwitcher();

  // Expose API for programmatic access if needed
  window.StyleSwitcher = {
    switch: switchStyle,
    getCurrent: getSelectedStyle,
    getAvailable: function() {
      return Object.keys(STYLES).map(function(key) {
        return {
          key: key,
          name: STYLES[key].name
        };
      });
    }
  };

})();
