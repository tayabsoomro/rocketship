/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import SearchBar from "./SearchBar";
import Items from "./Items";

class OrderSupplies extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="order-supplies">
                <SearchBar/>
                <Items/>
            </div>
        )
    }
};

export default OrderSupplies;
