const greetReducer = (state = "Hello", action) => {
  switch (action.type) {
    case "GREETING":
      return (state = action.payload)
    case "GOODBYE":
      return (state = action.payload)
    default:
      return state
  }
}

export default greetReducer
