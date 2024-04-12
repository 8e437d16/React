import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const plus = () => {
        setCount(count + 1);
        console.log(count);
    }

    const minus = () => {
        setCount(count - 1);
        console.log(count);
    }

    return (
        <div className="container">
            <h2 className="int">{count}</h2>
            <h2 className="int">{number}</h2>
            <button style={{ padding: 0, width: '20px' }} type="button" className="plus" onClick={plus}>+</button>
            <button style={{ padding: 0, width: '20px ' }} type="button" className="minus" onClick={minus}>-</button>

            <button type="button" className="plus" onClick={() => {
                setNumber(number + 1);
                console.log(number);

                setNumber(number + 2);
                console.log(number);

                setNumber(number + 3);
                console.log(number);
            }}>+3(Sync)</button>

            <button type="button" className="plus" onClick={() => {
                setNumber(number => number + 1);
                console.log(number);

                setNumber(number => number + 2);
                console.log(number);

                setNumber(number => number + 3);
                console.log(number);
            }}>+3(Async)</button>
        </div>
    )
}
