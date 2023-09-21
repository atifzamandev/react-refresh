import React from "react"
import { Button, ListGroup, ListGroupItem } from "react-bootstrap"

interface Props {
  cartItems: string[]
  onClear: () => void
  onRemove: () => void
}
const Cart = ({ cartItems, onClear, onRemove }: Props) => {
  return (
    <>
      <div>Cart; </div>
      <ListGroup as="ul">
        {cartItems.map((item) => (
          <ListGroup.Item as="li" key={item}>{item}</ListGroup.Item>
        ))}
      </ListGroup>

      <Button onClick={onClear}>Clear Items</Button>
      <Button onClick={onRemove}>Remove Items</Button>
    </>
  )
}

export default Cart
