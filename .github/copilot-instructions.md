# Copilot Instructions for Web Development Learning Repository

## Project Overview
This repository contains learning examples for web technologies: HTML forms and layouts, CSS (Flexbox, Grid, positioning), JavaScript (ES6+ features like closures, async/await, modules), and SVG icons. It's organized as standalone demos for educational purposes.

## Key Patterns
- **File Naming**: Use Chinese topic names for HTML/CSS files (e.g., `定位布局.html` for positioning layouts) but keep code and comments in English.
- **HTML Structure**: Standard HTML5 with `<meta charset="UTF-8">` and responsive viewport. Link external CSS via `<link rel="stylesheet" href="./filename.css">`.
- **CSS Layouts**: Prefer modern approaches:
  - Flexbox for flexible containers (see `demo.css` for flex-wrap and align-content examples).
  - CSS Grid for complex layouts (see `应用界面.css` for grid-template-areas).
  - Use `nth-of-type` selectors for styling multiple similar elements.
- **JavaScript**: ES6+ features with modules (`type: "module"` in `JavaScript/package.json`). Examples include closures (`闭包.js`), destructuring, async/await, Generators.
- **SVG Usage**: Inline SVG for icons in HTML, or reference external SVG files from `svg/` folder (e.g., `<img src="./svg/search.svg">`).

## Developer Workflows
- **Running HTML Demos**: Open `.html` files directly in browser to view layouts and interactions.
- **JavaScript Examples**: In `JavaScript/` folder, run `npm start` (executes `node index.js`) to see console outputs for basic JS concepts.
- **No Build Process**: Static files; no compilation or bundling required.
- **Debugging**: Use browser DevTools for HTML/CSS; Node.js console for JS.

## Conventions
- Code comments in Chinese for explanations (e.g., in `闭包.js`).
- Consistent indentation: 4 spaces for JS, 2 for CSS/HTML.
- Avoid global variables; use `let`/`const` over `var`.
- For forms, use semantic HTML with `label` elements linked via `for` attribute.

## Integration Points
- None; each file is a self-contained example.
- SVG icons are shared across demos via `svg/` folder.

## Key Files
- `应用界面.html` + `应用界面.css`: Example of CSS Grid layout for app UI.
- `JavaScript/闭包.js`: Demonstrates closure concepts.
- `demo.html` + `demo.css`: Flexbox alignment demo.