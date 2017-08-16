/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Col, FormGroup, FormControl, Button } from 'react-bootstrap'

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
                        <FormGroup inline controlId="formInlineType">
                            {' '}
                            <FormControl type="text" placeholder="Variation type" />
                        </FormGroup>
                    {' '}
                        <FormGroup inline controlId="formInlineValues">
                            {' '}
                            <FormControl type="email" placeholder="Variation values" />
                        </FormGroup>
                    {' '}
                    <Button type="submit">
                        Delete
                    </Button>

                </div>
            );
        }

            return (
                <div>{ lis } </div>
            );


    }
}