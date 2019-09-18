const initialState = "World"

const programReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROGRAM":
      return (state = action.payload)
    default:
      return state
  }
}

export default programReducer
