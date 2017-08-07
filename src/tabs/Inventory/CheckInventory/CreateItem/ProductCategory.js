/**
 * Created by admin on 2017-08-01.
 */
/**
 * Created by admin on 2017-07-31.
 */
import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem, form } from 'react-bootstrap'


class ProductCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }



    render() {
        return (
            <ButtonToolbar>
                <DropdownButton title="Choose category" id="dropdown-size-medium">
                    <MenuItem eventKey="1">Produce</MenuItem>
                    <MenuItem eventKey="2">Hardware</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">New Category</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
}
export default ProductCategory;