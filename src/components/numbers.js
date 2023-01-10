import React, { useState, useEffect } from "react";

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three']);
    const [letters, setLetters] = useState(['a', 'b', 'c']);
    const addNumbers = () => {
        setNumbers(['four']);
    }
    const addLetters = () => {
        setLetters([...letters, 'd']);
    }

    useEffect(() => {
        console.log('use our effect');
    }, [numbers])
    return (
        <div>
            <h1>Numbers</h1>
            {numbers.map(number => {
                return <h2 key={number}>{number}</h2>
            })}
            {letters.map(number => {
                return <h2 key={number}>{number}</h2>
            })}
            <button onClick={addNumbers}> Change Numbers</button>
            <button onClick={addLetters}> Change Letters</button>
        </div>
    )
} 
export default Numbers