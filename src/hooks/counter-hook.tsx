import { useState } from "react"

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increamentCounter = () => setCounter(prevCounter => prevCounter + 1);
    const decreamentCounter = () => setCounter(prevCounter => prevCounter - 1);

    return { counter, setCounter, decreamentCounter, increamentCounter };

}