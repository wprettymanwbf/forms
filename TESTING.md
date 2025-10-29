# Testing Instructions for Dynamic CSS Switching

## Overview
This document provides step-by-step instructions for testing the dynamic CSS switching functionality implemented in this project.

## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- A local web server (Python's http.server, Node's http-server, or similar)

## Setup

1. Clone or navigate to the repository:
   ```bash
   cd /path/to/forms
   ```

2. Start a local web server:
   ```bash
   python3 -m http.server 8080
   ```
   Or with Node.js:
   ```bash
   npx http-server -p 8080
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8080/
   ```

## Test Cases

### Test 1: Basic Theme Switching
**Objective**: Verify that users can switch between themes

1. Open `http://localhost:8080/index.html`
2. Locate the "Theme" dropdown in the top-right corner
3. Select "Dark Mode" from the dropdown
4. **Expected Result**: Page immediately switches to dark theme with dark background and light text

5. Select "High Contrast" from the dropdown
6. **Expected Result**: Page switches to high contrast theme with bold text and strong borders

7. Select "Professional" from the dropdown
8. **Expected Result**: Page returns to the original light theme

### Test 2: Theme Persistence
**Objective**: Verify that theme choice persists across page navigation

1. On index.html, select "Dark Mode"
2. Click on "LabelOrderFormv041.html" link
3. **Expected Result**: The form page loads with Dark Mode theme already applied

4. Navigate back to index.html (use browser back button)
5. **Expected Result**: Index page still shows Dark Mode theme

6. Refresh the page (F5 or Ctrl+R)
7. **Expected Result**: Dark Mode persists after refresh

### Test 3: Theme Persistence Across Sessions
**Objective**: Verify that theme choice persists after closing browser

1. Select "High Contrast" theme
2. Close the browser completely
3. Reopen browser and navigate to `http://localhost:8080/`
4. **Expected Result**: High Contrast theme is still active

### Test 4: All Pages Support Themes
**Objective**: Verify all HTML pages support theme switching

Test each page:
- index.html
- LabelOrderFormv041.html
- LabelOrderFormv040.html
- LabelOrderFormv035.html
- LabelQuoteFormv002.html
- label-quote-form.html

For each page:
1. Navigate to the page
2. Verify the theme switcher appears in top-right corner
3. Switch to each theme and verify visual changes
4. **Expected Result**: All pages display correctly in all themes

### Test 5: Form Functionality
**Objective**: Verify that forms remain fully functional in all themes

1. Open `LabelOrderFormv041.html`
2. Switch to each theme
3. For each theme:
   - Fill in form fields (text inputs, dropdowns, textareas)
   - Click "Add Row" button to add dynamic rows
   - Verify all input controls work correctly
   - **Expected Result**: All form functionality works regardless of theme

### Test 6: Print Styles
**Objective**: Verify print-friendly styles in all themes

1. Open any form page
2. For each theme:
   - Switch to the theme
   - Open print preview (Ctrl+P or Cmd+P)
   - **Expected Result**:
     - Theme switcher is hidden
     - Buttons are hidden
     - Layout is optimized for printing
     - Colors are print-friendly

### Test 7: Responsive Design
**Objective**: Verify themes work on different screen sizes

1. Open any page in Professional theme
2. Resize browser window to simulate different devices:
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)
3. Switch between themes at each size
4. **Expected Result**: All themes display correctly at all sizes

### Test 8: Browser Compatibility
**Objective**: Verify themes work across different browsers

Test in each browser:
- Chrome/Chromium
- Firefox
- Safari
- Edge

For each browser:
1. Open index.html
2. Switch between all three themes
3. Navigate to a form page
4. **Expected Result**: Theme switching works consistently in all browsers

### Test 9: JavaScript API
**Objective**: Verify the programmatic API works

1. Open any page
2. Open browser developer console (F12)
3. Run the following commands:

```javascript
// Check current theme
StyleSwitcher.getCurrent()
// Expected: 'style1', 'style2', or 'style3'

// Get available themes
StyleSwitcher.getAvailable()
// Expected: Array of 3 theme objects

// Switch theme programmatically
StyleSwitcher.switch('style2')
// Expected: Page switches to Dark Mode
```

### Test 10: Performance
**Objective**: Verify no performance degradation

1. Open browser developer tools (F12)
2. Go to Network tab
3. Reload page and observe:
   - Only one CSS file loads initially
   - Switching themes loads new CSS file
   - Previous CSS file is removed
   - **Expected Result**: Minimal network traffic, fast loading

## Troubleshooting

### Theme doesn't change
- Check browser console for errors
- Verify CSS files exist in `/styles` directory
- Clear browser cache and try again

### Theme doesn't persist
- Check if browser allows localStorage
- Verify localStorage isn't full
- Try in incognito/private mode

### Styling looks broken
- Verify web server is serving CSS files correctly
- Check file paths are correct (relative paths)
- Inspect element to see which CSS is loaded

## Success Criteria

All tests should pass with the following outcomes:
✅ Theme switcher appears on all pages
✅ All three themes display correctly
✅ Theme persists across navigation and sessions
✅ Forms remain fully functional in all themes
✅ Print styles work correctly
✅ Responsive design works on all screen sizes
✅ Compatible with all major browsers
✅ JavaScript API functions correctly
✅ No performance issues
✅ No console errors

## Reporting Issues

If any test fails, please report with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshot if applicable
- Console errors (if any)
