import React from "react"
import { useSelector } from "react-redux"
import ButtonGroup from "./ButtonGroup"

function App() {
  const resources = [
    "React",
    "Redux",
    "JavaScript",
    "Node",
    "Greeting",
    "Goodbye"
  ]
  const greetUser = useSelector(state => state.greetUser)
  const user = useSelector(state => state.userName)
  return (
    <div>
      <h1>Click any of the button to see redux at work</h1>

      <h3>
        {greetUser} <span style={{ color: "#0000ff" }}>{user}</span>
      </h3>

      <ButtonGroup resources={resources} />
    </div>
  )
}

export default App
