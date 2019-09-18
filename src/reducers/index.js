import { combineReducers } from "redux"
import programReducer from "./programReducer"
import greetingReducer from "./greetingReducer"

const allReducer = combineReducers({
  greetUser: greetingReducer,
  userName: programReducer
})

export default allReducer
