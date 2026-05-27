import MyFunction from './Myfunction'
import Myclass from './Myclass'
const App = () => (
  <div>
    <hr />
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

  </div>
)

export default App

