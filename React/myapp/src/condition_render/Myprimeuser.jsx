import React, { Component } from 'react'

export default class Myprimeuser extends Component {
  render() {
    return (
      <div>
        myprimeuser:{this.props.name}
        
        <br></br>
        <button>logout</button>
      </div>
    )
  }
}
