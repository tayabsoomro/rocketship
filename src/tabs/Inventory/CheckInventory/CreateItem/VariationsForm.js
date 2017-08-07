/**
 * Created by admin on 2017-08-07.
 */
import React from 'react';
import { Button, Well, Collapse } from 'react-bootstrap'

class VariationsForm extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {};
    }


    render() {
        return (
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    Add Item Variations
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}
export default VariationsForm;