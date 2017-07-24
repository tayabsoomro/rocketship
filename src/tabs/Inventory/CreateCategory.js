
import Modal from 'react-bootstrap/lib/Modal';

class CreateCategory extends ReactComponent {
  constructor(props) {
    super(props);
  }

  render() {
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  }

}
