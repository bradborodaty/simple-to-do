import React, { useContext } from 'react';

import { DataContext } from './DataProvider';

import { StyledTasks } from '../styles/StyledTasks';

function Complete({ data }) {
    const source = useContext(DataContext);

    const handleClick = (e) => {
        e.preventDefault();
        source.removeItem(e.currentTarget.dataset.index, "complete");
    }
    
    return (
        <StyledTasks>
            <li className="heading">Finished Tasks:</li>
            {data.map((item, index) =>
                <li key={index}>
                    <div className="item_name">{item}</div>
                    <div className="item_button">
                        <button data-index={index} onClick={handleClick}>
                            Remove
                        </button>
                    </div>
                </li>
            )}
        </StyledTasks>
    )
}

export default Complete;