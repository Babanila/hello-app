import { combineReducers } from "redux"
import nameReducer from "./nameReducer"
import greetReducer from "./greetingReducer"

const allReducer = combineReducers({
  greetUser: greetReducer,
  userName: nameReducer
})

export default allReducer
