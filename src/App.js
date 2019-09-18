import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { greetings, goodbye, name } from "./actions"

function App() {
  const dispatch = useDispatch()

  const greetUser = useSelector(state => state.greetUser)
  const user = useSelector(state => state.userName)
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <span>
          {greetUser} {user}
        </span>
      </p>
      <button onClick={() => dispatch(greetings())}>greet</button>
      <button onClick={() => dispatch(goodbye())}>say bye</button>
      <button onClick={() => dispatch(name())}>see</button>
    </div>
  )
}

export default App
