/**
 * Created by admin on 2017-08-01.
 */
/**
 * Created by admin on 2017-07-31.
 */
import React from 'react';
import { form, ControlLabel, HelpBlock, FormGroup, FormControl } from 'react-bootstrap'

class TextField extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            value: ''
        };
    }

    getValidationState(){
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
             <form>

                 {/*Text space for item name*/}
                 <FormGroup
                     controlId="BasicForm"
                     validationState={this.getValidationState()}>
                        <ControlLabel>Enter name of item</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Item name"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                 </FormGroup>
             </form>
        );
    }
}
export default TextField;