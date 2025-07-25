import { useState, useCallback } from 'react';

/**
 * @param {number} initialValue - Initial value of the counter state
 * @return {Object} Counter state and utility methods
 */
export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);

    const setCountMemoized = useCallback((value) => {
        setCount(value)
    },[])

    return {
        count,
        increment,
        decrement,
        reset,
        setCount:setCountMemoized,
    };
}