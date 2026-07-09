import React from 'react'
import Cards from './Cards'

export default function Myprops() {
  return (
    <div className='d-flex'>
      <Cards img={"tiger.jpg"} title={"card1"} text={"this is react1"} button={"click"}>
        hiiiiiiihiiiiiii
      </Cards>

      <Cards img={"panda.jpg"} title={"card2"} text={"this is react2"} button={"click"}/>
      <Cards img={"lotus.jpg"} title={"card3"} text={"this is react3"} button={"click"}/>
      <Cards img={"pec.jpg"} title={"card4"} text={"this is react4"} button={"click"}/>
    </div>
  )
}
