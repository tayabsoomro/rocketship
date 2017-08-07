/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Button, Well, Col, Row, Grid, Collapse } from 'react-bootstrap'
import TagTextBox from "./TagTextBox";

export default class VariationsForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {};
    }


    render() {
        return (
            <Row className="addVariations">
                <Col md={6} mdPush={6}> Variation name </Col>
                <Col md={6} mdPull={6}> Variation values </Col>
            </Row>
        );
    }
}