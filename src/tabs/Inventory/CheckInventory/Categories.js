/**
* Created by admin on 2017-07-21.
*/
import React from 'react';
import { Button, Tab, Row, Col, NavItem, Nav, MenuItem, DropdownButton, Modal }  from 'react-bootstrap'
import InventoryTable from "./InventoryTable";
import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";

/**
* The segment of the Inventory page that displays the inventory categories
* and the items under the cateogories
*/
/**Tab below Search bar that shows all categories**/
//>>>>>>> origin/cc:src/tabs/Inventory/CheckInventory/Categories.js
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
            <div className="col-lg-12">

                {/* Mahmud's edit */}


              {/* Modal for creating categories : */}
              <CreateCategory show={this.state.showCreateCategoryModal}
              onHide={this.hideCreateCategory.bind(this)} />

              {/* Modal for deleting categories : */}
              <DeleteCategory show={this.state.showDeleteCategoryModal}
              onHide={this.hideDeleteCategory.bind(this)} />

              {/* The Tab Structure : */}
              <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
              <Row className="clearfix">


                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                    <Row className="clearfix">
                        {/* The Row of Tabs (category names and actions) : */}
                        <Col xs={12} md={9}>
                            <Nav bsStyle="tabs">
                                <NavItem eventKey="first" onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 1
                                </NavItem>
                                <NavItem eventKey="second" onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 2
                                </NavItem>
                                <NavItem eventKey="third"
                                         onSelect={(ev_key, ev) => {this.setState({...this.state, currentTab : ev_key})}}>
                                    Tab 3
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={6} md={3}>
                            {/*Dropdown should display option to create and delete categories**/}
                            <DropdownButton eventKey="3" title="Category Actions">
                                <MenuItem eventKey={this.state.currentTab} onClick={this.showCreateCategory.bind(this)}>
                                    Create Category
                                </MenuItem>
                                <MenuItem>
                                    Delete Category
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="3.4">Separated link</MenuItem>
                            </DropdownButton>
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
              </Row>
              </Tab.Container>
            </div>
        )
    }
}
export default Categories;