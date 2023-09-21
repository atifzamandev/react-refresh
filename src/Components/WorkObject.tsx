import { useState } from "react"
import { Button } from "react-bootstrap"

const WorkObject = () => {
  const [work, setWork] = useState({
    title: "Front-end developer",
    skill: "React, typescript",
    available: true,
    salary: 50000,
  })

  console.log("object", work.available)
  const handleClick = () => {
    setWork(
        {
            ...work,
      //title: "back-end developer",
       skill: "Node, typescript",
    //   available: true,
    //   salary: 60000,
    }
    )
  }

  return (
    <>
      {work.title}
      <hr />
      {work.skill}
      <hr />
      {work.available.toString()}
      <hr />
      {work.salary}
      <hr />
      <Button onClick={handleClick}> Click to update</Button>
    </>
  )
}

export default WorkObject
