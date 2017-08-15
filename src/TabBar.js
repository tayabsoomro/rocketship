/**
 * Created by tayabsoomro on 2017-07-07.
 */
import React from 'react'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Inventory from './tabs/Inventory/CheckInventory/Inventory'
import Home from './tabs/home/Home'
import AddItemModal from './tabs/Inventory/OrderItems/AddItemModal'
import OrderSupplies from "./tabs/Inventory/OrderItems/OrderSupplies"
import CreateItem from "./tabs/Inventory/CheckInventory/CreateItem/CreateItemForm"
import { LinkContainer } from 'react-router-bootstrap'




class TabBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
               <Tab.Container id="left-tabs-example" defaultActiveKey={this.props.tabName}>
                    <Row className="clearfix">
                        <Col sm={4}>
                            <Nav bsStyle="pills" stacked>

                                <LinkContainer to="/">
                                  <NavItem eventKey="/">
                                      Home
                                  </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/payments">
                                  <NavItem eventKey="/payments">
                                      Payments
                                  </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/inventory">
                                  <NavItem eventKey="/inventory">
                                      Inventory
                                  </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/orderSupplies">
                                  <NavItem eventKey="/orderSupplies">
                                      Order Items
                                  </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/createitem">
                                  <NavItem eventKey="/createitem">
                                      Create Item
                                  </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/performance">
                                  <NavItem eventKey="/performance">
                                      Performance
                                  </NavItem>
                                </LinkContainer>

                             </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="/">
                                    to be done
                                </Tab.Pane>
                                <Tab.Pane eventKey="/payments">
                                to be done..
                                </Tab.Pane>
                                <Tab.Pane eventKey="/inventory">
                                    <Inventory/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="/orderSupplies">
                                    <OrderSupplies/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="/createitem">
                                    <CreateItem/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="/performance">
                                    nothing
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <div > {this.props.children} </div>
            </div>
        );
    }
}
export default TabBar;
