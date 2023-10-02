import { useCounter } from "@/hooks/counter-hook";
import { render, renderHook } from "@testing-library/react";
import { useState } from "react";
import { act } from "react-dom/test-utils";

describe('Testing of Counter hooks', () => {
    it('Test the value of hook', () => {
        const { result } = renderHook(() => {
            const [counter, setCounter] = useState(0);

            const increamentCounter = () => setCounter(prevCounter => prevCounter + 1);
            const decreamentCounter = () => setCounter(prevCounter => prevCounter - 1);

            return { counter, increamentCounter, decreamentCounter };
        })

        expect(result.current.counter).toBe(0);
    });

    it('Test counter value', () => {
        const { result } = renderHook(useCounter);
        expect(result.current.counter).toBe(0);
    });

    it('Should Increament the counter', () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.increamentCounter());
        expect(result.current.counter).toBe(1);
    });

    it('Should Decreament the counter', () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.decreamentCounter());
        expect(result.current.counter).toBe(-1);
    });
});