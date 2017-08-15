/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap'

export default class VariationsForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {};
    }


    render() {
        var lis = [];

        for (var i=0; i<this.props.numVar; i++) {
            lis.push(
                <div inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Jane Doe" />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>
                        {' '}
                        <FormControl type="email" placeholder="jane.doe@example.com" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                        Send invitation
                    </Button>
                </div>
            );
        }

            return (
                <div>{ lis } </div>
            );


    }
}