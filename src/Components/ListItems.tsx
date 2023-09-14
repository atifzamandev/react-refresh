import { useState } from "react"
import { ListGroup } from "react-bootstrap"

const ListItems = () => {
  const names = ["Atif", "Kashif", "Zaman", "Humayun"]
  const [selectedName, setSelectedName] = useState(-1)
  
  
  return (
    <ListGroup>
      {names.map((name,index) => (
        <ListGroup.Item key={name}
        className={selectedName === index ? "active": ""}
        onClick={()=>setSelectedName(index)}
        >
          {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ListItems
