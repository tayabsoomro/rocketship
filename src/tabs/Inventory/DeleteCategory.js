
import React from 'react';
import { Modal , Button } from 'react-bootstrap/lib/';

class DeleteCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return(
        <Modal show={this.props.show} onHide={this.props.onHide}>

            <Modal.Header>
              <Modal.Title>Delete Category</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Forms go here
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

        </Modal>
      );
  }

}

export default DeleteCategory;
