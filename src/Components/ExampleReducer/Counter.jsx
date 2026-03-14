import { useReducer } from "react";
import { counterReducer, initialState } from "./counterReducer";

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
        <h2>Count: {state.count}</h2>

        <button onClick={() => dispatch({ type: "increment" })}>
            +
        </button>

        <button onClick={() => dispatch({ type: "decrement" })}>
            -
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>
            Reset
        </button>
        </div>
    );
}