import React from 'react'
import Mythree from './Mythree'

export default function Mytwo(props) {
  return (
    <div>
      <h1>id2:-{props.id2}</h1>
      <h1>name2:-{props.name2}</h1>

      <Mythree id3={props.id2} name3={props.name2}/>
    </div>
  )
}
