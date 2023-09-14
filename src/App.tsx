import { useState } from "react"
import AlertList from "./Components/AlertList"
import ButtonAlert from "./Components/ButtonAlert"
import ButtonClick from "./Components/ButtonClick"
import GroupList from "./Components/GroupList"
import { Button } from "react-bootstrap"

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const names = ["Atif", "Kashif", "Zaman"]

  const handleSelectItem = (index: number, item: string) => {
    console.log(index + 1, item)
  }

  return (
    <>
      {showAlert && (
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
      />
    </>
  )
}

export default App
