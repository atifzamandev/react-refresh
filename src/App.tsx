import { useState } from 'react'

import './App.css'
import { ListGroup } from './components/ListGroup'
import Header from './components/Header'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  
  let cityList = ["Lahore", "Faisalabad", "Islamabad", "Karachi", "Multan"]
  const handleSelectCity = (index:number, city:string) => {
    console.log(index, city)
  }

  const handleButtonClick = ()=> console.log('Button Clicked')
  return (
   <> 
   <Header/>
   <Alert>
    <span>This is working alert</span>
   </Alert>
   <ListGroup cityList={cityList} heading='Cities List' onSelectCity={handleSelectCity}/>
   <Button color= "secondary" onClick={handleButtonClick}>Submit</Button>
   </>
  )
}

export default App
