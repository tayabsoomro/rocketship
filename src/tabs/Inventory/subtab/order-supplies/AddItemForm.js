/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { FormControl, InputGroup, ControlLabel, Checkbox, FormGroup, Button }  from 'react-bootstrap'

class AddItemForm extends React.Component {


    render() {
        return(
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Item Name</ControlLabel>
                    <FormControl componentClass="input" placeholder="Doughnuts">
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Item Quantity</ControlLabel>
                    <FormControl type="number" min="1" max="10" value="1"/>
                </FormGroup>


                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Comments</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Additional comments..." />
                </FormGroup>


                <Button type="submit">
                    Submit
                </Button>
            </form>
        )
    }
}
export default AddItemForm;