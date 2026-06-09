import React, { Component } from 'react';

class UserProfile extends Component {
  state = {
    name: "Vikas",
    age: 22,
    city: "Pandharpur"
  };

  changeAge = () => {
    this.setState({
      age: 23
    });
  };

  render() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}</h2>
        <h2>City: {this.state.city}</h2>

        <button onClick={this.changeAge}>
          Update Age
        </button>
      </div>
    );
  }
}

export default UserProfile;