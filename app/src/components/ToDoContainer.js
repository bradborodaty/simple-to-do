import React, { useContext } from 'react';

import { DataContext } from './DataProvider';
import Incomplete from './Incomplete';
import Complete from './Complete';
import AddItem from './AddItem';

import { StyledToDoContainer } from '../styles/StyledToDoContainer';

function ToDoContainer() {
    const data = useContext(DataContext);
    console.log(data);

    return (
        <StyledToDoContainer>
            <AddItem />
            <div className="task_wrapper">
                <Incomplete
                    data={data.todo.incomplete} 
                />
                <Complete
                    data={data.todo.complete} 
                />
            </div>
        </StyledToDoContainer>
    )
}

export default ToDoContainer;