import  { useState } from 'react'

export default function Myfilter() {
let students=[
    {name:"rahul",course2:"science"},
    {name:"raj",course2:"commerce"},
    {name:"sahil",course2:"science"},
    {name:"pooja",course2:"arts"}
];

const [course1,setCourse]=useState("All");
let result=students.filter((v)=>{
    if (course1 === "All"){
        return true;
    }
    return v.course2 === course1;
});
  return (
    <div>
      <h2>Filter in React students list</h2>
      <button onClick={()=> setCourse("All")}>All</button>
      <button onClick={()=> setCourse("science")}>science</button>
      <button onClick={()=> setCourse("commerce")}>commerce</button>
      <button onClick={()=> setCourse("arts")}>arts</button>

      <hr></hr>

      {
        result.map((v)=>{
        return(
            <h1>
                {v.name}-{v.course2}
            </h1>
        );
        })
      }
    </div>
  )
}
