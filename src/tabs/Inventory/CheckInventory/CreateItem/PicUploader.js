/**
 * Created by admin on 2017-08-05.
 */
import React from 'react';
import ImageUploader from 'react-image-upload';



class PicUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader/>
        );
    }
}
export default PicUploader;
