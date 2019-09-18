import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import myStore from "./store"
import App from "./components/App"

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
)
module.hot.accept()
