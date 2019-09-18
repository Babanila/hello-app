const initialState = "World"

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REACT":
      return (state = action.payload)
    case "REDUX":
      return (state = action.payload)
    case "JAVASCRIPT":
      return (state = action.payload)
    case "NODE":
      return (state = action.payload)
    default:
      return state
  }
}

export default nameReducer
