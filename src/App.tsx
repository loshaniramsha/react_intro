import './App.css';
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <>
            <div>
                <h1>Count: {count}</h1> {}
            </div>
            <ButtonComponent name="Click" onClick={handleIncrement} />
        </>
    );
}

export default App;
