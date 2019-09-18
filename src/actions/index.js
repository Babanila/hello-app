export const greetings = () => {
  return {
    type: "GREETING",
    payload: "How are you"
  }
}

export const goodbye = () => {
  return {
    type: "GOODBYE",
    payload: "Bye"
  }
}

export const name = () => {
  return {
    type: "NAME",
    payload: "Redux"
  }
}
