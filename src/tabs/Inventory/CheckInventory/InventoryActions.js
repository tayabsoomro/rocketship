/**
 * Created by admin on 2017-07-22.
 */
/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap'

class InvAction extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <NavDropdown eventKey="1">
                <MenuItem eventKey="1.1">Action</MenuItem>
                <MenuItem eventKey="1.2">Another action</MenuItem>
                <MenuItem eventKey="1.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="1.4">Separated link</MenuItem>
            </NavDropdown>
        )

    }
}
export default InvAction;