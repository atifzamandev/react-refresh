import { useState } from "react"
import styled from "styled-components"

const List = styled.ul `
  lsit-style: none;
  padding: 0;
`
interface ListItemProps{
  active: boolean
}
const ListItem = styled.li <ListItemProps>`
  padding: 5px 0;
  background: ${bgProps=>bgProps.active ? 'blue' : 'none'}
`
interface ListGroupProp {
  cityList: string[]
  heading: string
  onSelectCity: (index: number, city: string) => void
}
export const ListGroup = ({
  cityList,
  heading,
  onSelectCity,
}: ListGroupProp) => {
  const [isSelected, setIsSelected] = useState(-1)

  return (
    <>
      <h2>{heading}</h2>
      {cityList.length === 0 && <p>No item found in the list</p>}
      <List className="list-group">
        {cityList.map((city, index) => (
          <ListItem
            // className={
            //   isSelected === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active = {index===isSelected}
            key={city}
            onClick={() => {
              setIsSelected(index)
              onSelectCity(index, city)
            }}
          >
            {city}
          </ListItem>
        ))}
      </List>
    </>
  )
}
