import { useEffect, useState } from "react"

import "./App.css"
import { ListGroup } from "./components/ListGroup"
import Header from "./components/Header"
import Alert from "./components/Alert"
import Button from "./components/Button"
import Like from "./components/Like/Like"

function App() {
  let cityList = ["Lahore", "Faisalabad", "Islamabad", "Karachi", "Multan"]
  const [isOpen, isSetOpen] = useState(false)

  
  const handleSelectCity = (index: number, city: string) => {
    console.log(index, city)
  }

  const handleButtonClick = () => isSetOpen(!isOpen)

  const handleLikeClick = ()=> {
    console.log('Clicked')
}

  return (
    <>
      <Header />
      <Like onClick={handleLikeClick}/>
      <Alert>
        <span>This is working alert</span>
      </Alert>
      <ListGroup
        cityList={cityList}
        heading="Cities List"
        onSelectCity={handleSelectCity}
      />
      {isOpen && (
        <Alert onClose={() => isSetOpen(false)}>
          <span>This is button alert</span>
        </Alert>
      )}
      <Button color="secondary" onClick={handleButtonClick}>
        Submit
      </Button>
    </>
  )
}

export default App
