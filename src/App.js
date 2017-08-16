import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import TabBar from "./TabBar";
import Well from 'react-bootstrap/lib/Well';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
      let currentPath = window.location.pathname;
      return(
        <div>
            <Well>
                Rocketship
                <div className="pull-right">
                    <a href="#">Log in</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Sign up</a>
                </div>

            </Well>
            <Route path={currentPath}>
              <TabBar tabName={currentPath}/>
            </Route>
        </div>
      );
  }
}
export default App;
