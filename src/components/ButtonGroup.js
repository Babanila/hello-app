import React from "react";
import { setProgram, setGreeting } from "../actions";
import myStore from "../store";

const ButtonGroup = ({ resources }) => {
    return (
        <div>
            {resources.map((program, i) => (
                <button
                    data-program={program}
                    key={i}
                    onClick={dispatchButtonAction}
                    style={{ fontSize: "0.8rem", marginLeft: "1rem" }}
                >
                    {program}
                </button>
            ))}
        </div>
    );
};

const dispatchButtonAction = e => {
    const text = e.target.dataset.program;
    text === "Greeting" || text === "Goodbye"
        ? myStore.dispatch(setGreeting(text))
        : myStore.dispatch(setProgram(text));
};

export default ButtonGroup;
