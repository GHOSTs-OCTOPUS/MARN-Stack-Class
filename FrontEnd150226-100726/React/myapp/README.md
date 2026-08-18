# React Components & React Router Demo

A React application demonstrating the use of:

- Class Components
- Function Components
- Props in Class Components
- Props in Function Components
- React Router Navigation
- Multiple Pages

## 🚀 Features

- React Router DOM for page navigation
- Reusable components
- Passing data using props
- Class-based component examples
- Functional component examples
- Clean project structure

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS

---

## 📄 Pages

### Home Page
Displays project introduction and navigation links.

### About Page
Contains information about React components.

### Services Page
Demonstrates reusable components and props.

### Contact Page
Displays contact information.

---

## 🔗 React Router Navigation

The project uses React Router DOM for client-side routing.

### Available Routes

| Route | Component |
|---------|------------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/contact` | Contact |

Example:

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
```

---

## 🎯 Function Component Example

```jsx
function FunctionComponent() {
  return (
    <div>
      <h2>Function Component</h2>
    </div>
  );
}

export default FunctionComponent;
```

---

## 🎯 Class Component Example

```jsx
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
      </div>
    );
  }
}

export default ClassComponent;
```

---

## 🎯 Props in Function Component

Parent Component:

```jsx
<FunctionProps
  name="Vikas Kole"
  profession="Web Developer"
/>
```

Child Component:

```jsx
function FunctionProps(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.profession}</p>
    </div>
  );
}

export default FunctionProps;
```

---

## 🎯 Props in Class Component

Parent Component:

```jsx
<ClassProps
  name="Vikas Kole"
  profession="UI/UX Designer"
/>
```

Child Component:

```jsx
import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.profession}</p>
      </div>
    );
  }
}

export default ClassProps;
```

---

## ⚙️ Installation

### Download project

```bash
Download project Folder from GitHub
```

### Navigate to Project

```bash
Open Terminal
cd myapp 
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

## 📦 Dependencies

```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x"
}
```

---

## 🎓 Learning Objectives

This project helps understand:

- React Component Types
- Component Reusability
- Passing Data with Props
- React Router Navigation
- Page-Based Application Structure
- JSX Syntax
- State & Props Fundamentals

---

## 👨‍💻 Author

**Vikas Kole**

Freelance Web Developer & UI/UX Designer


---

## 📄 License

This project is created for educational and learning purposes.