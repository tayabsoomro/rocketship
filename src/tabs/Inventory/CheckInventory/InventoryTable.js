/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Table, DropdownButton, Button } from 'react-bootstrap'
import ReorderBtn from "./ReorderBtn";
import InventoryActions from "./InventoryActions"

class InventoryTable extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }



    render() {
        return (
            <div>
                <Table striped condensed hover responsive className="col-lg-12 col-md-12">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Reorder?</th>

                        {/*Button will allow addition or deletion of an item under a category*/}
                        <th> <Button className="pull-right" bsStyle="success">Add Item</Button> </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> <ReorderBtn/> </td>
                        <td> <InventoryActions name = ""/> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> <ReorderBtn/> </td>
                        <td> <InventoryActions name = ""/> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td> <ReorderBtn/> </td>
                        <td list-style-type="none"> <InventoryActions name = ""/> </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default InventoryTable;