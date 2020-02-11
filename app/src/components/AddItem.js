import React, { useContext } from 'react';

import { DataContext } from './DataProvider';

function AddItem() {
    const source = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        source.addItem(e.target.item.value);
        e.target.reset();
    }
    
    return (
        <form 
            className="add_item"
            onSubmit={handleSubmit}
        >
            <fieldset>
                <input 
                    type="text" 
                    placeholder="Add an item"
                    name="item"
                />
            </fieldset>
        </form>
    )
}

export default AddItem;