import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your React application.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}

export default App

