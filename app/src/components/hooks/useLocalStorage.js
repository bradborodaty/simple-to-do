import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [storedValued, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValued) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key,JSON.stringify(valueToStore));
        } catch(error) {
            console.log(error);
        }
    };

    return [storedValued, setValue];
}