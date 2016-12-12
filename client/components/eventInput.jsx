import React from 'react';
import ReactBootstrap from 'react-bootstrap';

class EventInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      category: ''
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
        <form>
        <FormGroup
          controlId="formBasicText"
          // validationState={this.getValidationState()}
        >
          <ControlLabel>Enter a Category:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter a category"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}


export { EventInput};