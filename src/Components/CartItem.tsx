import { useState } from "react"
import { Button, ListGroup } from "react-bootstrap"

const CartItem = () => {
  const [cart, setCart] = useState({
    discount: "5%",
    items: [
      { id: 1001, title: "Product 1", quantity: 1 },
      { id: 1002, title: "Product 2", quantity: 1 },
      { id: 1003, title: "Product 3", quantity: 1 },
    ],
  })

  const handleUpdateQty = ()=>{
    setCart({...cart, discount: "10%", items: cart.items.map(item=>item.id=== 1003 ? {...item, quantity: 2}: item) } )
  }

  return (
    <>
      <div>CartItem</div>
      <ListGroup>
        {cart.discount}
        {cart.items.map((item) => (
          <ListGroup.Item key={item.id}>{item.title} has quantity: {item.quantity}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={handleUpdateQty}> Update Qty</Button>
    </>
  )
}

export default CartItem
