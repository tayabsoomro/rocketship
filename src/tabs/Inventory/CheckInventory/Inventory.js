/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import SearchBar from "./SearchBar";
import Categories from "./Categories";

class Inventory extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="inventory">
                <SearchBar/>
                <Categories/>
            </div>
        )
    }
};

export default Inventory;