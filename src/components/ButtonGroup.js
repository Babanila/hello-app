import React from "react"
import { useDispatch } from "react-redux"
import { react, redux, javaScript, node, greeting, goodbye } from "../actions"

const ButtonGroup = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(react())}>React</button>
      <button onClick={() => dispatch(redux())}>Redux</button>
      <button onClick={() => dispatch(javaScript())}>JavaScript</button>
      <button onClick={() => dispatch(node())}>Node</button>
      <button onClick={() => dispatch(greeting())}>Hello</button>
      <button onClick={() => dispatch(goodbye())}>Bye</button>
    </div>
  )
}

export default ButtonGroup
