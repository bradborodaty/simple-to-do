import React, { useContext } from 'react';

import { DataContext } from './DataProvider';

import { StyledTasks } from '../styles/StyledTasks';

function Incomplete({ data }) {
    const source = useContext(DataContext);

    const handleClick = (e) => {
        e.preventDefault();
        source.removeItem(e.currentTarget.dataset.index, "incomplete");
    }
    
    const handleDoneClick = (e) => {
        e.preventDefault();
        source.completeItem(e.currentTarget.dataset.index);
    }
    
    return (
        <StyledTasks>
            <li className="heading">Unfinished Tasks:</li>
            {data.map((item, index) =>
                <li key={index}>
                    <div className="item_name">{item}</div>
                    <div className="item_button">
                        <button data-index={index} onClick={handleDoneClick}>
                            Done
                        </button>
                        <button data-index={index} onClick={handleClick}>
                            Remove
                        </button>
                    </div>
                </li>
            )}
        </StyledTasks>
    )
}

export default Incomplete;