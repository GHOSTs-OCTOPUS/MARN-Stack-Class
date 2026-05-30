import React from 'react' 
import MyFunction from './Myfunction'
import Myclass from './Myclass'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Container from './component/Container'
import Footer from './component/Footer'

// import './App.css'
import './style.css'

const App = () => (
  <div>
    <Navbar /> 
    <Header />
    <Container />
    
    
     <h1>Hello, React!</h1>
        <p>Welcome to your React application.</p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        
    <hr />
    <MyFunction />
    <Myclass />

    <Footer />

  </div>
)

export default App

