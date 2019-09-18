// const initialState = "React"

const nameReducer = (state = "React", action) => {
  switch (action.type) {
    case "NAME":
      return (state = action.payload)
    default:
      return (state = "React")
  }
}

export default nameReducer
