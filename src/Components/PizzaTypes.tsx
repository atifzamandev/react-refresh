import { useState } from "react"
import { Button } from "react-bootstrap"

const PizzaTypes = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Chicken",
    toppings: ["Mushroom"],
  })

  const handleAddTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] })
  }

  return (
    <>
      <div>Pizza Types</div>
      <div>{pizza.toppings}</div>

      <Button onClick={handleAddTopping}>Add Topping</Button>
    </>
  )
}

export default PizzaTypes
