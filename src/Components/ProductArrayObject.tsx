import { useState } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { produce } from "immer"

const ProductArrayObject = () => {
  const [products, setProducts] = useState([
    { itemId: 1001, itemName: "iPhone", available: true },
    { itemId: 1002, itemName: "Samsung", available: false },
    { itemId: 1003, itemName: "Oppo", available: true },
  ])

  const handleUpdateProduct = () => {
    //setProducts(products.map(product=>product.itemId === 1001 ? {...product, available: false }: product))

    setProducts(
      produce((product) => {
        const item = product.find((item) => item.itemId === 1003)

        if (item) item.available = false
      })
    )
  }

  return (
    <>
      <div>ProductArrayObject</div>

      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.itemId}>
            {product.available.toString()}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
      <Button onClick={handleUpdateProduct}>Update Prodcut</Button>
    </>
  )
}

export default ProductArrayObject
