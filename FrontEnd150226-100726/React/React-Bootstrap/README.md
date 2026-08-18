# Bootstrap Installation Guide for React

This guide explains how to install and use Bootstrap in a React application without errors.

---

## Prerequisites

Before installing Bootstrap, make sure you have:

* Node.js (Latest LTS version recommended)
* npm or yarn installed
* React project created using Vite or Create React App

Check versions:

```bash
node -v
npm -v
```

---

# Step 1: Create a React Project

## Using Vite

```bash
npm create vite@latest my-app -- --template react
```

Navigate into project folder:

```bash
cd my-app
```

Install dependencies:

```bash
npm install
```

---

# Step 2: Install Bootstrap

Install Bootstrap package:

```bash
npm install bootstrap
```

Verify installation:

```bash
npm list bootstrap
```

Expected output:

```bash
bootstrap@5.x.x
```

---

# Step 3: Import Bootstrap CSS

Open:

```text
src/main.jsx
```

Add Bootstrap CSS import at the top:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# Step 4: Import Bootstrap JavaScript (Optional)

Required only for:

* Dropdowns
* Modals
* Tooltips
* Offcanvas
* Collapse
* Toasts

Add in `main.jsx`:

```jsx
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

Example:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

# Step 5: Test Bootstrap

Open `App.jsx`:

```jsx
function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">
        Bootstrap Successfully Installed!
      </h1>

      <button className="btn btn-success">
        Click Me
      </button>
    </div>
  );
}

export default App;
```

Run project:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# Bootstrap Grid Example

```jsx
<div className="container">
  <div className="row">
    <div className="col-md-6">
      Left Section
    </div>

    <div className="col-md-6">
      Right Section
    </div>
  </div>
</div>
```

---

# Bootstrap Component Example

## Card

```jsx
<div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">
      React Bootstrap Card
    </h5>

    <p className="card-text">
      Bootstrap works perfectly with React.
    </p>

    <button className="btn btn-primary">
      Learn More
    </button>
  </div>
</div>
```

---

# Common Errors and Solutions

## Error 1: Bootstrap Styles Not Working

### Cause

Bootstrap CSS not imported.

### Fix

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Error 2: Modal or Dropdown Not Opening

### Cause

Bootstrap JavaScript missing.

### Fix

```jsx
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

## Error 3: Module Not Found

### Cause

Bootstrap package not installed.

### Fix

```bash
npm install bootstrap
```

---

## Error 4: Class Not Applying

### Wrong

```jsx
<div class="container">
```

### Correct

```jsx
<div className="container">
```

React uses:

```jsx
className
```

instead of:

```html
class
```

---

## Error 5: Build Fails After Installation

Delete dependencies and reinstall:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Run again:

```bash
npm run dev
```

---

# Recommended Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Card.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Best Practices

✅ Import Bootstrap once in `main.jsx`

✅ Use React components for UI sections

✅ Prefer Bootstrap utility classes

✅ Keep custom CSS in separate files

✅ Use responsive grid system

✅ Test on mobile devices

✅ Use semantic HTML

---

# Useful Bootstrap Classes

## Spacing

```html
mt-3
mb-4
p-3
px-5
py-2
```

---

## Colors

```html
text-primary
text-success
text-danger
bg-dark
bg-light
```

---

## Buttons

```html
btn btn-primary
btn btn-success
btn btn-danger
btn btn-outline-primary
```

---

## Flexbox

```html
d-flex
justify-content-center
align-items-center
```

---

# Production Build

Create optimized build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

# Bootstrap Version Check

```bash
npm list bootstrap
```

Update Bootstrap:

```bash
npm install bootstrap@latest
```

---

# Final Checklist

* [ ] Bootstrap installed
* [ ] CSS imported
* [ ] JS bundle imported (if needed)
* [ ] Project runs successfully
* [ ] No console errors
* [ ] Responsive layout tested
* [ ] Production build generated

---

Happy Coding! 🚀
Bootstrap + React is a powerful combination for building responsive and professional web applications quickly.
