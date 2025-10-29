# Dynamic CSS Switching

This project implements a dynamic CSS switching mechanism that allows users to toggle between different visual themes.

## Features

- **Three Pre-configured Themes:**
  - **Professional**: Clean, light theme with standard fonts (default)
  - **Dark Mode**: Modern dark theme for reduced eye strain
  - **High Contrast**: Accessible theme with bold colors and larger text

- **Persistent Theme Selection**: User's theme preference is saved in `localStorage` and persists across all pages
- **Performance Optimized**: Stylesheets are loaded dynamically with minimal impact on page load time
- **Modern Best Practices**: External CSS and JavaScript files, no inline code

## File Structure

```
/
├── styles/
│   ├── style1.css          # Professional theme
│   ├── style2.css          # Dark Mode theme
│   ├── style3.css          # High Contrast theme
│   └── style-switcher.js   # JavaScript for dynamic switching
├── index.html              # Home page with theme selector
├── LabelOrderFormv041.html # Example form with theme support
└── ... (other HTML files)
```

## Usage

### For Users

1. Open any page in the project
2. Use the "Theme" dropdown in the top-right corner to select your preferred style
3. Your selection is automatically saved and applied to all pages

### For Developers

#### Adding Theme Support to New Pages

To add theme switching to a new HTML page:

1. Add the stylesheet link in the `<head>` section:
```html
<link rel="stylesheet" id="dynamicStylesheet" href="styles/style1.css">
```

2. Add the JavaScript before the closing `</head>` tag:
```html
<script src="styles/style-switcher.js"></script>
```

3. The theme switcher UI will be automatically injected into the page

#### Customizing Themes

Each theme is defined in its own CSS file:

- **style1.css**: Professional theme with light colors
- **style2.css**: Dark theme with #1e1e1e background
- **style3.css**: High contrast with bold text and strong borders

To modify a theme, edit the corresponding CSS file. The structure follows these key classes:

- `.form-header`, `.form-row`: Dynamic form rows
- `.form-group`: Form field containers
- `#styleSwitcher`: Theme selector UI
- `button`, `input`, `select`, `textarea`: Form controls

#### Creating a New Theme

1. Create a new CSS file (e.g., `style4.css`) in the `styles/` directory
2. Copy the structure from an existing theme file
3. Modify colors, fonts, and other properties
4. Update `styles/style-switcher.js` to include the new theme:

```javascript
const STYLES = {
  style1: { name: 'Professional', path: 'styles/style1.css' },
  style2: { name: 'Dark Mode', path: 'styles/style2.css' },
  style3: { name: 'High Contrast', path: 'styles/style3.css' },
  style4: { name: 'Your New Theme', path: 'styles/style4.css' }
};
```

## Technical Details

### JavaScript API

The style switcher exposes a global `StyleSwitcher` object with the following methods:

```javascript
// Switch to a specific theme
StyleSwitcher.switch('style2');

// Get the current theme
const current = StyleSwitcher.getCurrent(); // Returns 'style1', 'style2', etc.

// Get available themes
const themes = StyleSwitcher.getAvailable();
// Returns: [{ key: 'style1', name: 'Professional' }, ...]
```

### Browser Compatibility

The implementation has been tested and works in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

The code uses standard ES5 JavaScript for maximum compatibility.

### Performance

- Stylesheets are loaded dynamically only when selected
- Previous stylesheet is removed before loading new one to prevent conflicts
- Theme preference is cached in localStorage to avoid repeated selections
- Minimal JavaScript footprint (~4KB uncompressed)

## Print Support

All themes include print-specific styles that:
- Hide the theme switcher UI
- Hide buttons and interactive elements
- Optimize layout for printing
- Reset colors to print-friendly values

## Accessibility

The High Contrast theme specifically addresses accessibility needs:
- WCAG AA contrast ratios
- Larger font sizes
- Bold text for improved readability
- Clear focus indicators on interactive elements
- Simplified color palette

## Testing

To test the implementation:

1. Start a local web server:
   ```bash
   python3 -m http.server 8080
   ```

2. Open `http://localhost:8080/` in your browser

3. Test theme switching:
   - Select each theme from the dropdown
   - Navigate to different pages
   - Verify theme persists across navigation
   - Test print preview in each theme

4. Test in different browsers (Chrome, Firefox, Safari/Edge)

## License

This implementation follows standard web development practices and uses no external dependencies.
