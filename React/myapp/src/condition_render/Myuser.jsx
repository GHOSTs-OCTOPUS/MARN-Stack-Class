import React, { Component } from 'react'
import Myprimeuser from './Myprimeuser'
import Myguestuser from './Myguestuser'

export default class Myuser extends Component {
  render() {
    return (
      <div>
        <h1>welcome user</h1>
        {
            (()=>{
               let prime=this.props.prime 

               if(prime){
                return <Myprimeuser name="priya"/>
               }else{
                return <Myguestuser/>
               }
            }) ()
        }
      </div>
    )
  }
}
