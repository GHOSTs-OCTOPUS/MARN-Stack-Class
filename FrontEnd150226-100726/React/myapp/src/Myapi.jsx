import { useEffect, useState } from 'react'

export default function Myapi() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        const getapi=async()=>{
            const response=await fetch("https://fakestoreapi.com/products")
            const apidata=await response.json()
            setdata(apidata)
        }
        getapi()
    },[])
  return (
    <div>
      <div className="container-fluid row">
        {
            data.map((v)=>{
                return <div>
                <h1>id:-{v.id}</h1>
                <h1>title:-{v.title}</h1>
                <h1>price:-{v.price}</h1>
                <h1>description:-{v.description}</h1>
                <h1>category:-{v.category}</h1>
                <img src={v.image} width="200" height="200"/>
                </div>
            })
        }
      </div>
    </div>
  )
}
