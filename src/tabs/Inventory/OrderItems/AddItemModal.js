/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Modal, Button }  from 'react-bootstrap';
import AddItemForm from './AddItemForm';


class AddItemModal extends React.Component {


    render() {
        return(
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add a new Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddItemForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default AddItemModal;