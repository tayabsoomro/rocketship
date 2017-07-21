/**
 * Created by admin on 2017-07-21.
 */
import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
        <div>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Brand</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}
export default SearchBar;