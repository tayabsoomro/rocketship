import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import TabBar from "./TabBar";
import Well from 'react-bootstrap/lib/Well'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (

        <div>
        <Well>Rocketship</Well>
            <div className="col-lg-12 col-md-12">
                <TabBar/>
            </div>
        </div>

    );
  }
}
export default App;
