/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Tab, Row, Col, NavItem, Nav, MenuItem, NavDropdown }  from 'react-bootstrap'
import InventoryTable from "./InventoryTable";


class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return(
            <div className="col-lg-12">
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                    <Row className="clearfix">
                        <Col sm={12}>
                            <Nav bsStyle="tabs">
                                <NavItem eventKey="first">
                                    Tab 1
                                </NavItem>
                                <NavItem eventKey="second">
                                    Tab 2
                                </NavItem>
                                <NavDropdown eventKey="3" title="More Actions">
                                    <MenuItem eventKey="3.1">Action</MenuItem>
                                    <MenuItem eventKey="3.2">Another action</MenuItem>
                                    <MenuItem eventKey="3.3">Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="3.4">Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    Produce
                                    <InventoryTable/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Hardware
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.1">
                                    Tab 3.1 content
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.2">
                                    Tab 3.2 content
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.3">
                                    Tab 3.3 content
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.4">
                                    Tab 3.4 content
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <div>  {this.props.children} </div>
            </div>
        )
    }
}
export default Categories;