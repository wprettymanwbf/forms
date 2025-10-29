# Ubuntu Font Integration Guide

This guide explains how to integrate the Ubuntu font stylesheet into existing HTML forms in the repository.

## Quick Start

Add these lines to the `<head>` section of your HTML file:

```html
<!-- Optional but recommended: Preconnect to Google Fonts for better performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Include the Ubuntu font stylesheet -->
<link rel="stylesheet" href="styles/style-ubuntu.css">
```

## For Existing Forms with Inline Styles

If your forms have inline `<style>` tags with existing font-family declarations (like the current forms using Calibri), you have two options:

### Option 1: Keep Existing Styles (Recommended for gradual migration)
Keep both stylesheets. The inline styles will override the Ubuntu font where specified:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="styles/style-ubuntu.css">
  <style>
    /* Your existing inline styles remain here */
    body {
      font-family: Calibri, sans-serif; /* This will override Ubuntu */
    }
  </style>
</head>
```

### Option 2: Full Migration to Ubuntu Font
Replace existing font-family declarations with Ubuntu:

1. Add the Ubuntu font stylesheet link (as shown in Quick Start)
2. Remove or update `font-family` declarations in inline `<style>` tags:

```html
<!-- BEFORE -->
<style>
  body {
    font-family: Calibri, sans-serif;
  }
  select {
    font-family: Calibri, sans-serif;
  }
</style>

<!-- AFTER -->
<style>
  /* Remove font-family declarations - they'll inherit from style-ubuntu.css */
  body {
    /* font-family: Calibri, sans-serif; */ /* REMOVED */
  }
  select {
    /* font-family: Calibri, sans-serif; */ /* REMOVED */
  }
</style>
```

Or simply reference the CSS variable:

```css
body {
  font-family: var(--font-primary); /* Uses Ubuntu from style-ubuntu.css */
}
```

## Example Integration with LabelOrderFormv041.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Label Order Form</title>
  
  <!-- Add Ubuntu font support -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="styles/style-ubuntu.css">
  
  <style>
    body {
      /* font-family: Calibri, sans-serif; <- Remove this line */
      margin: 0;
      padding: 20px;
      font-size: 0.875rem;
    }
    /* Rest of your styles... */
  </style>
</head>
<body>
  <!-- Your form content -->
</body>
</html>
```

## Path Considerations

Depending on where your HTML file is located relative to the `styles/` directory:

- **Root directory** (e.g., `LabelOrderFormv041.html`):
  ```html
  <link rel="stylesheet" href="styles/style-ubuntu.css">
  ```

- **Subdirectory** (e.g., `forms/order.html`):
  ```html
  <link rel="stylesheet" href="../styles/style-ubuntu.css">
  ```

## Benefits of Migration

1. **Consistency**: Uniform typography across all forms
2. **Modern Look**: Ubuntu is a contemporary, professional font
3. **Better Readability**: Optimized line-height and letter-spacing
4. **Performance**: Font-display: swap prevents invisible text
5. **Maintainability**: Change the font site-wide by updating one CSS file
6. **Accessibility**: Proper typography improves user experience

## Testing Your Integration

After adding the Ubuntu font stylesheet:

1. Open your form in a web browser
2. Check that the Ubuntu font loads correctly
3. Verify form elements (inputs, selects, buttons) display properly
4. Test on different browsers (Chrome, Firefox, Safari, Edge)
5. Test with slow network connection to ensure fallback fonts work

## Troubleshooting

**Problem**: Font doesn't load
- **Solution**: Check the stylesheet path is correct relative to your HTML file
- **Solution**: Ensure you have an internet connection (Google Fonts requires it)

**Problem**: Fallback to system fonts
- **Solution**: This is expected behavior if Google Fonts is blocked or unavailable
- **Solution**: The CSS includes comprehensive fallback fonts for this scenario

**Problem**: My inline styles override the Ubuntu font
- **Solution**: This is by design (specificity). Remove font-family from inline styles if you want Ubuntu

## Support

For questions or issues with the Ubuntu font implementation, refer to:
- `styles/README.md` - Complete documentation
- `styles/ubuntu-font-demo.html` - Working example
- Google Fonts: https://fonts.google.com/specimen/Ubuntu
