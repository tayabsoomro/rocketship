import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import TabBar from "./TabBar";
import Well from 'react-bootstrap/lib/Well';
import { BrowserRouter, Route } from 'react-router-dom';
import FormPanel from './users/FormPanel';



class Login extends React.Component {
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
              <div className='col-sm-12 col-md-12 col-lg-12'>
                <div className='col-md-1'></div>
                <div className='col-md-5 col-sm-12'>
                  <FormPanel
                    onSubmit={(event) => {
                      event.preventDefault() ; console.log('Submit');
                    }}
                    submitName='Login'
                    title='Login'
                    fields={['User ID/Email Address', 'Password']}
                  >
                  </FormPanel>
                </div>
                <div className='col-md-5 col-sm-12'>
                  <FormPanel
                    onSubmit={(event) => {
                      event.preventDefault() ; console.log('Submit');}
                    }
                    submitName='Sign Up'
                    title='Create an Account'
                    fields={['First Name', 'Last Name' , 'Email', 'Password']}
                  >
                  </FormPanel>
                </div>
                <div className='col-md-1'></div>
              </div>
        </div>
      );
  }
}
export default Login;
