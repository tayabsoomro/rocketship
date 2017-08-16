/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Table, Button }  from 'react-bootstrap'
import AddItemModal from "./AddItemModal";


class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
            lgShow: false
        };
    }

    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return(
            <div className="col-lg-12">

                <AddItemModal show={this.state.lgShow} onHide={lgClose} />

                <Table responsive bordered>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Comments</th>
                        <th>Total</th>
                        <th>
                            <Button bsStyle="warning" onClick={()=>this.setState({ lgShow: true })}>
                            +
                            </Button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Lettuce</td>
                        <td>5</td>
                        <td>$1.99</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Lettuce</td>
                        <td>5</td>
                        <td>$1.99</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Lettuce</td>
                        <td>5</td>
                        <td>$1.99</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Categories;