import React from "react"
import { useSelector } from "react-redux"
import ButtonGroup from "./ButtonGroup"

function App() {
  const greetUser = useSelector(state => state.greetUser)
  const user = useSelector(state => state.userName)
  return (
    <div>
      <h1>Greeting App</h1>
      <p>
        <span>
          {greetUser} {user}
        </span>
      </p>
      <ButtonGroup />
    </div>
  )
}

export default App
