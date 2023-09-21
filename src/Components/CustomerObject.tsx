import { useState } from "react"
import { Button } from "react-bootstrap"

const CustomerObject = () => {

    const [customer, setCustomer] = useState({
        customerId: 1001,
        name: "Muhammad Hassan",
        type: "B2B",
        address:{
            building: "House no N-95",
            street: 5,
            "zip-code": "ZPM-985",
            country: "USA"
        }
      })

      const handleClick = () => {
       setCustomer({
        ...customer,
        name: "Atif Zaman",
        address: 
        {
            ...customer.address,
            street :10
        }

       })
        
      }

  return (
    <>
    <div>Nested Object</div>
<div>
<hr />
{customer.customerId}
<hr />
{customer.name}
<hr />
{customer.type}
<hr />
{customer.address.building}
<hr />
{customer.address.street}
<hr />
{customer.address["zip-code"]}
<hr />
{customer.address.country}
</div>
<hr />
    <Button onClick={handleClick}>Click Update</Button>
    </>
  )
}

export default CustomerObject