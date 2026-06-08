import React from 'react'
import myimg from "../pages/img/footballkick1.png"

export default function Home() {
  return (
    <div className="home">
    {/*public*/}
      <img src="earth.png" width="200px" height="200px"/>

    {/*img folder*/}
    <img src={myimg} width="200px" height="200px"/>
    </div>
  )
}
