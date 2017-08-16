/**
 * Created by tayabsoomro on 2017-08-05.
 */
import React from 'react';
import { Well, Form, FormControl, FormGroup, Col, Checkbox, Button, ControlLabel } from 'react-bootstrap';



class App extends React.Component {

    render() {
        return (
            <div className="col-lg-12">
                <div className="run">{''}</div>
                <div className="col-lg-3">{' '}</div>
                <div className="col-lg-6">
                    <Well>
                        <h3>Store Information:</h3>
                        <Form horizontal>
                            <FormGroup controlId="storename">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name:
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Mystic Java" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="storetype">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Type:
                                </Col>
                                <Col sm={10}>
                                    <select className="form-control" ref="userInput" defaultValue="select" required>
                                        <option value="select" disabled>Select Type</option>
                                        <option value="retail">Retail</option>
                                        <option value="manufacturer" disabled>Manufacturer</option>
                                    </select>
                                </Col>
                            </FormGroup>
                        </Form>

                        <div className="run">{' '}</div>
                        <h3>Your Information:</h3>
                        <Form horizontal>
                            <FormGroup controlId="name">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Name
                                </Col>
                                <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl type="name" placeholder="First Name" />
                                </Col>
                                <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl type="name" placeholder="Last Name" />
                                </Col>
                            </FormGroup>



                            <FormGroup controlId="cellphone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Phone
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="tel" placeholder="(306) 554-3421" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="address">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Address
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="123 ABC Street Saskatoon, Saskatchewan, S7L 5S8, SK CA" />
                                </Col>
                            </FormGroup>
                            <div className="run"></div>
                            <FormGroup controlId="submit">
                                <Col componentClass={ControlLabel} sm={9}>

                                </Col>
                                <Col sm={3}>
                                    <Button bsStyle="primary">Create Store</Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </Well>
                </div>
                <div className="col-lg-3">{' '}</div>
            </div>

        );
    }
}
export default App;
