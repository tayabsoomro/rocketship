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
            numChildren: 1
        };
    }

    addVariation() {
        this.setState( {
            numChildren: this.state.numChildren + 1
        });
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

                            <VariationType numVar={this.state.numChildren} />
                            <div>
                                <Button className="pull-right" onClick={this.addVariation.bind(this)}> Add variation</Button>
                                {' '}
                                <Button className="pull-right" bsStyle="success"> Submit </Button>
                            </div>

                        </Well>
                    </div>
                </Collapse>

            </div>
        );
    }
}