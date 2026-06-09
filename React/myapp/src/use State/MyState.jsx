import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
// Updating State with setState()
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });

    // Updating State Based on Previous State
    this.setState((prevState) => ({
    count: prevState.count + 1
    }));
  };
  

  render() {
    return (
      <div>
        {/* Creating State in a Class Component */}
        <h2>Count: {this.state.count}</h2>
        {/* Updating State with setState() */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;