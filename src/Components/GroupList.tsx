import { useState } from "react"
import { ListGroup } from "react-bootstrap"

interface GroupListProps {
  items: string[]
  heading: string
  onSelectItem: (index: number, item: string) => void
}

const GroupList = ({ items, heading, onSelectItem }: GroupListProps) => {
  const [selectedCity, setSelectedCity] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            className={selectedCity === index ? "active" : ""}
            key={item}
            onClick={() => {
              setSelectedCity(index)
              onSelectItem(index, item)
            }}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default GroupList
