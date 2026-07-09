import React, { Component } from 'react'

export default class Myclassprops extends Component {
  render() {
    return (
      <div>
        <h1>id:-{this.props.id}</h1>
        <h1>name:-{this.props.name}</h1>
      </div>
    )
  }
}
