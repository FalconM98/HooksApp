import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 1
    });

    const {counter1,counter2} = state;

    return (
        <>
            <h1>Counter1: {counter1}</h1>
            <h1>Counter2: {counter2}</h1>

            <button
                className="btn"
                onClick={
                    () => setCounter({
                        ...state,
                        counter1: counter1+1,
                    })
                }>+1</button>
        </>
    )
}
