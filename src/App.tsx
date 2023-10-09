import { useState } from "react"
// import AlertList from "./Components/AlertList"
// import ButtonAlert from "./Components/ButtonAlert"
// import ButtonClick from "./Components/ButtonClick"
// import GroupList from "./Components/GroupList"
// import { Button } from "react-bootstrap"
// import Message from "./Components/Message"
// import WorkObject from "./Components/WorkObject"
// import CustomerObject from "./Components/CustomerObject"
// import CountryArray from "./Components/CountryArray"
// import ProductArrayObject from "./Components/productArrayObject"
// import NavBar from "./Components/NavBar"
// import Cart from "./Components/Cart"
// import GamePlayer from "./Components/gamePlayer"
// import PizzaTypes from "./Components/PizzaTypes"
// import CartItem from "./Components/CartItem"
import Form from "./Components/Forms/Form"

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const names = ["Atif", "Kashif", "Zaman"]
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"])

  const handleSelectItem = (index: number, item: string) => {
    console.log(index + 1, item)
  }

  const handleCartItem = () => {
    setCartItems([])
  }

  const handleRemoveItem = () => {
    setCartItems([...cartItems.filter((item) => item != "Product 2")])
  }
  return (
    <>
  <Form />

    {/* <CartItem/> */}
      {/* <PizzaTypes /> */}
      {/* <GamePlayer /> */}
      {/* <NavBar cartCount={cartItems.length} />

      <Cart
        cartItems={cartItems}
        onClear={handleCartItem}
        onRemove={handleRemoveItem}
      /> */}

      {/* <ProductArrayObject /> */}
      {/* <CountryArray /> */}
      {/* <CustomerObject /> */}
      {/* <WorkObject /> */}

      {/* <Message /> */}

      {/* {showAlert && (
        <ButtonAlert
          children="This is the testing purpose"
          onClose={() => setShowAlert(false)}
        />
      )}
      <Button onClick={() => setShowAlert(true)}>Click it</Button>

      <AlertList>
        Hello <span>World</span>
      </AlertList>
      <ButtonClick
        children="Click Here"
        onClick={() => {
          console.log("color")
        }}
      />
      <GroupList
        items={names}
        heading="Names List"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  )
}

export default App
