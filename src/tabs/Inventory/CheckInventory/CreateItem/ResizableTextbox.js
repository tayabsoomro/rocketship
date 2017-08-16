/**
 * Created by admin on 2017-08-05.
 */
import React from 'react';
import Textarea from 'react-textarea-autosize';

// If you use CommonJS syntax:
//
// var Textarea = require('react-textarea-autosize').default;

export default class ResizableTextbox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Textarea></Textarea>
            </div>
        );
    }
}
