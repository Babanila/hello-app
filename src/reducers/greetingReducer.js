const greetingReducer = (state = "Welcome", action) => {
    switch (action.type) {
        case "SET_GREETING":
            return (state = action.payload);
        default:
            return state;
    }
};

export default greetingReducer;
