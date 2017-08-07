/**
 * Created by tayabsoomro on 2017-07-07.
 */
import React from 'react';
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



class TabBar extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            /** Sidebar listing all functionalities available **/
            <div>



               <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Row className="clearfix">
                        <Col sm={4}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">
                                    Home
                                </NavItem>
                                <NavItem eventKey="second">
                                    Payments
                                </NavItem>
                                <NavItem eventKey="third">
                                    Inventory
                                </NavItem>
                                <NavItem eventKey="fourth">
                                    Order Items
                                </NavItem>
                                <NavItem eventKey="fifth">
                                    Create
                                </NavItem>
                             </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    to be done
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                to be done..
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Inventory/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <OrderSupplies/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <CreateItem/>
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
