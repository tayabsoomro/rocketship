/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Button } from 'react-bootstrap'

class ReorderBtn extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <Button bsStyle="success">Reorder</Button>
        );
    }
}
export default ReorderBtn;