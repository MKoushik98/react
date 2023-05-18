import { useState, useRef } from "react";
export default function Stopwatch() {
    const timerIdRef = useRef();
    const [count, setCount] = useState(0);
    const startHandler = () => {
        timerIdRef.current = setInterval(() => setCount(count => count + 1), 1000)
    }
    const stopHandler = () => {
        clearInterval(timerIdRef.current)
    }
    const resetHandler = () => {
        setCount(0)
    }
    return (
        <div>

            <div>Timer:{count}s</div>
        <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>stop</button>
        <button onClick={resetHandler}>reset</button>
        </div >
        </div>
        
    )
}
