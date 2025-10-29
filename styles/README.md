# Styles Directory

This directory contains CSS stylesheets for the forms repository.

## Files

### style-ubuntu.css

A comprehensive stylesheet that implements the Ubuntu font as the primary typeface for web documents.

#### Features

- **Font Source**: Google Fonts (reliable CDN with global availability)
- **Font Family**: Ubuntu with multiple weights (300, 400, 500, 700)
- **Performance**: Uses `font-display: swap` for optimal loading performance
- **Fallback Fonts**: Comprehensive system font stack including:
  - -apple-system (iOS/macOS)
  - BlinkMacSystemFont (macOS)
  - Segoe UI (Windows)
  - Roboto (Android)
  - And more, with `sans-serif` as final fallback
- **CSS Variables**: Uses CSS custom properties for maintainability
- **Coverage**: Applies to body, headings, form elements, tables, and more
- **Accessibility**: Proper line-height and letter-spacing for readability

#### Usage

Include the stylesheet in your HTML document:

```html
<!-- Optional: Preconnect to Google Fonts for better performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Include the Ubuntu font stylesheet -->
<link rel="stylesheet" href="styles/style-ubuntu.css">
```

Or import it in your main CSS file:

```css
@import url('styles/style-ubuntu.css');
```

#### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement with fallback fonts
- Font display swap prevents FOIT (Flash of Invisible Text)

#### License

The Ubuntu font is licensed under the Ubuntu Font License.
More information: https://ubuntu.com/legal/font-licence

### ubuntu-font-demo.html

A demonstration page showcasing the Ubuntu font implementation with:
- Typography hierarchy (h1-h6)
- Font weights (300, 400, 500, 700)
- Form elements styling
- Table formatting
- Code block examples

To view the demo, open `ubuntu-font-demo.html` in a web browser.

## Best Practices

1. **Performance**: The stylesheet uses Google Fonts CDN for reliable delivery
2. **Maintainability**: CSS variables make it easy to adjust font weights
3. **Accessibility**: Proper line-height and letter-spacing improve readability
4. **Fallbacks**: Comprehensive font stack ensures text displays even if Ubuntu fails to load
5. **Modern Standards**: Uses current CSS best practices (CSS variables, font-display)

## Customization

To customize font weights or add additional styles, modify the CSS variables in `:root`:

```css
:root {
  --font-primary: 'Ubuntu', sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

## Integration with Existing Forms

To apply the Ubuntu font to existing HTML forms in the repository:

1. Add the stylesheet link to the `<head>` section of your HTML file:
   ```html
   <link rel="stylesheet" href="styles/style-ubuntu.css">
   ```

2. The Ubuntu font will automatically be applied to:
   - Body text
   - Headings
   - Form inputs, selects, textareas, and buttons
   - Tables
   - All other text elements

3. Existing inline styles will override these defaults, so you may need to
   remove or update specific `font-family` declarations in inline `<style>` tags.

## Testing

To test the implementation:

1. Open `ubuntu-font-demo.html` in a web browser
2. Verify that the Ubuntu font loads correctly
3. Test with network throttling to ensure fallback fonts work
4. Check various font weights and styles render properly

## Support

For issues or questions about the Ubuntu font implementation, please refer to:
- Google Fonts: https://fonts.google.com/specimen/Ubuntu
- Ubuntu Font License: https://ubuntu.com/legal/font-licence
