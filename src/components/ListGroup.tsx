import React, { MouseEvent, useState } from "react"


interface ListGroupProp {
    cityList:string[],
    heading:string, 
    onSelectCity: (index:number, city:string)=>void
}
export const ListGroup = ({cityList,heading, onSelectCity}: ListGroupProp) => {

  const [isSelected, setIsSelected] = useState(-1)

  return (
    <>
    <h2>{heading}</h2>
      {cityList.length === 0 && <p>No item found in the list</p>}
      <ul className="list-group">
        {cityList.map((city, index) => (
          <li
            className={
                isSelected === index ? "list-group-item active" : "list-group-item"
            }
            key={city}
            onClick={()=>{setIsSelected(index); onSelectCity(index,city)}}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  )
}
