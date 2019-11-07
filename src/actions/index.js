export const setProgram = program => {
    return {
        type: "SET_PROGRAM",
        payload: program,
    };
};

export const setGreeting = greeting => {
    return {
        type: "SET_GREETING",
        payload: greeting,
    };
};
