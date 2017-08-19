
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonToolbar, Button , Col , Row , Panel , FormGroup , ControlLabel ,
        FormControl , HelpBlock }
  from 'react-bootstrap/lib';

  class FormPanel extends React.Component {
      constructor(props) {
          super(props);
          this.state = this.defaultState(this.props.fields);
      }

      defaultState(fields) {
        return JSON.parse(JSON.stringify({
          processing: false,
          status : "",
          fields: fields.reduce(((result, fieldName) => {
            result[fieldName] = "";
            return result;
          }), {})
        }));
      }

      componentWillMount(){
      }

      logIn(event){
      }

      goToSignUp() {
      }

      handleChange(event) {
        let nodeId = event.target.id;
        let nodeValue = event.target.value;
        this.state.fields[nodeId] = nodeValue;
        this.setState(this.state);
      }

      render() {
        if(this.state.processing) {
          return (
            <div className={this.props.size}>
              <Panel header="Send us a Message">
                <Row>
                  <img src="./img/loading.gif"/>
                </Row>
                <Row>
                  <h3 className="col-sm-4">
                    Processing your request, please wait
                  </h3>
                </Row>
              </Panel>
            </div>
          );
        } else {
          return(
              <div className={this.props.size}>
                <Panel header={this.props.title}>
                  <form onSubmit={this.props.onSubmit}>
                    {Object.keys(this.state.fields).map((fieldName) =>
                      <FormGroup key={fieldName} controlId={fieldName}>
                        <ControlLabel>{fieldName}</ControlLabel>
                        <FormControl type="text"
                          value={this.state.fields[fieldName]}
                          onChange={this.handleChange.bind(this)}
                        />
                      </FormGroup>
                    )}
                    <ButtonToolbar>
                    <LinkContainer to="/user">
                          <Button type="submit">{this.props.submitName}</Button>
                    </LinkContainer>
                      <Button onClick={() => {
                            this.setState(this.defaultState(this.props.fields));
                        }}>
                        Reset
                      </Button>
                    </ButtonToolbar>
                  </form>
                </Panel>
              </div>
          )
        }
      }
  };

  export default FormPanel;
