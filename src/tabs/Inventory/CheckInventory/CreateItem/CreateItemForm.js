/**
 * Created by admin on 2017-07-31.
 */
import React from 'react';
import { SplitButton, MenuItem, form, Radio, ControlLabel, HelpBlock, FormGroup, Button, FormControl } from 'react-bootstrap'
import TagTextBox from "./TagTextBox";
import ProductCategory from "./ProductCategory";
import TextField from "./TextField";
import ResizableTextbox from "./ResizableTextbox"
import VariationsForm from "./VariationsForm";


export default class CreateItemForm extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            value: ''
        };
    }

    render() {
        return (
            <div>

                <form>

                    {/*Mandatory form for all*/}
                    <FormGroup controlId="BasicForm">

                        {/*Item name goes here*/}
                        <TextField/>

                        <ControlLabel>Description</ControlLabel>
                        <ResizableTextbox/>
                        <br/>

                        <ControlLabel>Tags</ControlLabel>
                        {/*Draggable tag textbox goes here*/}
                        <TagTextBox name="itemTags"/>
                        <br/>

                        {/*Product Category goes here*/}
                        <ControlLabel>Product Category</ControlLabel>
                        <ProductCategory/>
                        <br/>
                        
                        {/*Upload image here*/}
                        <ControlLabel>Image</ControlLabel>
                       

                    </FormGroup>

                    {/*Form about variations*/}
                    <FormGroup>
                        <ControlLabel>Variations</ControlLabel>
                        <VariationsForm/>
                        <HelpBlock> Add variants if this product comes in multiple versions, like different sizes or colors. </HelpBlock>

                    </FormGroup>

                    <Button bsStyle="success">Create Item</Button>
                </form>

            </div>
        );
    }
}