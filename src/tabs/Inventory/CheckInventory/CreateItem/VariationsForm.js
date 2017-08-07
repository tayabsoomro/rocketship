/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Well, Col, Row, Grid, Collapse } from 'react-bootstrap'
import TagTextBox from "./TagTextBox";
import VariationType from "./VariationType"

export default class VariationsForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            numChildren: 0
        };
    }

    addVariation() {
        this.setState( {
            numChildren: this.state.numChildren + 1
        });
        <VariationType/>
    }



    render() {
        return (
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    Add Item Variations
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Form inline>
                                <FormGroup controlId="formInlineName">
                                    {' '}
                                    <FormControl type="text" placeholder="Variation Type" />
                                </FormGroup>
                                {' '}
                                <FormGroup controlId="formInlineEmail">
                                    {' '}
                                    <FormControl type="email" placeholder="Variation Values" />
                                </FormGroup>
                                {' '}
                                <Button type="submit">
                                    Delete
                                </Button>
                            </Form>

                            <Button onClick={this.addVariation()}> Add variation</Button>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}