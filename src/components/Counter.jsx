import React, {useState} from "react";

function handleIncrement({setCount, count}) {
    setCount(count + 1);
}

function handleDecrement({setCount, count}) {
    setCount(Math.max(count - 1, 0));
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <div className="counter">
                <h1>{count}</h1>
                <div className="counter-btn">
                    <button onClick={() => handleIncrement({setCount, count})}>
                        Incrementar
                    </button>
                    <button onClick={() => handleDecrement({setCount, count})}>
                        Decremento
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;



