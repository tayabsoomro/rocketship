/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import Table from 'react-bootstrap/lib/Table'
import ReorderBtn from "./ReorderBtn";

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
                <Table striped bordered condensed hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Reorder?</th>
                        <th>More</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> <ReorderBtn/> </td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> <ReorderBtn/> </td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td> <ReorderBtn/> </td>
                        <td>Otto</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default InventoryTable;