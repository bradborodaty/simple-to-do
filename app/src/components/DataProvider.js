import React from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';

export const DataContext = React.createContext({});

function DataProvider(props) {
    const [todo, setTodos] = useLocalStorage('brad-todo', {complete: [], incomplete: []});
    console.log(todo);

    const addItem = (name) => {
        const currentState = JSON.parse(JSON.stringify(todo));
        currentState.incomplete.push(name);
        setTodos(currentState);
    }

    const removeItem = (index, type) => {
        const currentState = JSON.parse(JSON.stringify(todo));
        currentState[type].splice(index, 1);
        setTodos(currentState);
    }

    const completeItem = (index) => {
        const currentState = JSON.parse(JSON.stringify(todo));
        let item = currentState.incomplete.splice(index, 1)[0];
        currentState.complete.push(item);
        setTodos(currentState);
    }

    const value = {
        todo,
        addItem,
        removeItem,
        completeItem,
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;