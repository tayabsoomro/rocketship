/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Button, Well, Col, Row, Grid, Collapse } from 'react-bootstrap'
import TagTextBox from "./TagTextBox";
import VariationType from "./VariationType"

export default class VariationsForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            numChildren: 0
        };
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
                            <Grid>
                                <Row className="headers">
                                    <Col md={6} mdPush={6}> Variation name </Col>
                                    <Col md={6} mdPull={6}> Variation values </Col>
                                </Row>

                                <Row className="addVariations">
                                    <Col md={6} mdPush={6}> Variation name </Col>
                                    <Col md={6} mdPull={6}> <TagTextBox name="variationVals"/> </Col>
                                </Row>

                            </Grid>
                            <Button onClick={
                                this.setState({})

                            }>Add variation</Button>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}