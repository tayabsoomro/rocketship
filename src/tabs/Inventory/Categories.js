/**
* Created by admin on 2017-07-21.
*/
import React from 'react';
import { Tab, Row, Col, NavItem, Nav, MenuItem, NavDropdown , Modal }
  from 'react-bootstrap';
import InventoryTable from "./InventoryTable";
import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";

/**
* The segment of the Inventory page that displays the inventory categories
* and the items under the cateogories
*/
class Categories extends React.Component {

  constructor() {
    super();
    this.state = {
      // The currently displayed tab : the first one by default
      currentTab : "first",
      // Show the modal for creating categories?
      showCreateCategoryModal: false,
      // Show the modal for deleteing cateogories?
      showDeleteCategoryModal: false,
    };
  }

  /**
  * Display the modal for creating categories :
  */
  showCreateCategory() {
    this.setState({
      ...this.state,
      showCreateCategoryModal: true,
    });
  }

  /**
  * Hide the modal for creating categories :
  */
  hideCreateCategory() {
    this.setState({
      ...this.state,
      showCreateCategoryModal: false,
    });
  }

  /**
  * Display the modal for deleting categories :
  */
  showDeleteCategory() {
    this.setState({
      ...this.state,
      showDeleteCategoryModal: true,
    });
  }

  /**
  * Hide the modal for deleting categories :
  */
  hideDeleteCategory() {
    this.setState({
      ...this.state,
      showDeleteCategoryModal: false,
    });
  }

  render() {
    return(
      <div className="col-lg-12">{/* Container for the Categories segment */}

        {/* Modal for creating categories : */}
        <CreateCategory show={this.state.showCreateCategoryModal}
            onHide={this.hideCreateCategory.bind(this)} />

        {/* Modal for deleting categories : */}
        <DeleteCategory show={this.state.showDeleteCategoryModal}
            onHide={this.hideDeleteCategory.bind(this)} />

        {/* The Tab Structure : */}
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
          <Row className="clearfix">

            {/* The Row of Tabs (category names and actions) : */}
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
                  <MenuItem eventKey={this.state.currentTab}
                      onClick={this.showCreateCategory.bind(this)}>
                    Create Category
                  </MenuItem>
                  <MenuItem eventKey={this.state.currentTab}
                      onClick={this.showDeleteCategory.bind(this)}>
                    Delete Category
                  </MenuItem>
                  <MenuItem>Another Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>

            {/* The Row of tab contents (the item tables within categories) :*/}
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
      {/* <div>  {this.props.children} </div> */}
    </div>
    )
  }
}
export default Categories;
