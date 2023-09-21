import { useState } from "react"
import { Button, ListGroup } from "react-bootstrap"

const CountryArray = () => {
  const [countries, setCountries] = useState([
    "Sweden",
    "Germany",
    "UK",
    "USA",
    "Finland",
    "France",
  ])

  const handleUpdateCountryArray = () =>{
    // Add to array
//    setCountries([...countries, "Spain"])

//Update array 
    setCountries(countries.map(country => country === "Germany" ? "Denmark" : country))
// Remove from Array

   // setCountries([...countries.filter(country=> country != "Finland")])
  }

  return (
    <>
      <div>CountryArray</div>
      <ListGroup>
        {countries.map((country) => (
          <ListGroup.Item key={country}>{country}</ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
      <Button onClick={handleUpdateCountryArray}>Update Country</Button>
    </>
  )
}

export default CountryArray
