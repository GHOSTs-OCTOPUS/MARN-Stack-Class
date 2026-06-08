import React from 'react'
import Mytwo from './Mytwo'

export default function Myone(props) {
  return (
    <div>
      <h1>id:-{props.id}</h1>
      <h1>name:-{props.name}</h1>

      <Mytwo id2={props.id} name2={props.name}/>
    </div>
  )
}
