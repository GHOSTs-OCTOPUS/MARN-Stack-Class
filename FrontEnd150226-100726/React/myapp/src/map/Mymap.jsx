import React from 'react'

export default function Mymap() {
    let data=[{
        "name":"sahil",
        "language":"hindi",
        "id":101,
        "img":"https://picsum.photos/id/237/200/300"
    },
    {
        "name":"raj",
        "language":"marathi",
        "id":102,
        "img":"https://picsum.photos/id/237/200/300"
    },
    {
        "name":"priya",
        "language":"english",
        "id":103,
        "img":"https://picsum.photos/id/237/200/300"
    }
]
  return (
    <div>
      {
        data.map((v)=>{
         return <div>
            <h1>name:-{v.name}</h1>
            <h1>language:-{v.language}</h1>
            <h1>id:-{v.id}</h1>
            <img src={v.img}/>
            <hr></hr>
         </div>
        })
      }
    </div>
  )
}
