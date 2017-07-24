/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Tab, Row, Col, NavItem, Nav, MenuItem, NavDropdown , Modal }  from 'react-bootstrap'
import InventoryTable from "./InventoryTable";


class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTab : "first",
            showCreateModal: false,
            showDeleteModal: false,
        };
    }

    showCreateCategory() {
      this.setState({
        showCreateModal: true,
        showDeleteModal: false,
      });
      console.log(this.state.showCreateModal);
    }

    hideCreateCategory() {
      this.setState({
        showCreateModal: false,
        showDeleteModal: false,
      });
      console.log(this.state.showCreateModal);
    }

    render() {
        return(
            <div className="col-lg-12">
              <Modal show={this.state.showCreateModal}
                      onHide={this.hideCreateCategory.bind(this)}>
                <Modal.Header>
                  <Modal.Title> Hello World </Modal.Title>
                </Modal.Header>
              </Modal>
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                    <Row className="clearfix">
                        <Col sm={12}>
                            <Nav bsStyle="tabs">
                                <NavItem eventKey="first"
                                    onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 1
                                </NavItem>
                                <NavItem eventKey="second"
                                    onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 2
                                </NavItem>
                                <NavItem eventKey="third"
                                    onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 3
                                </NavItem>
                                <NavItem eventKey="fourth"
                                    onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 4
                                </NavItem>
                                <NavDropdown title="Actions">
                                    <MenuItem
                                      eventKey={this.state.currentTab}
                                      onClick={this.showCreateCategory.bind(this)}>
                                      Create Category
                                    </MenuItem>
                                    <MenuItem>
                                      Delete Category
                                    </MenuItem>
                                    <MenuItem>Another Action</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem>Separated link</MenuItem>
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
