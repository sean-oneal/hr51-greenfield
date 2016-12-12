import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { EventInput } from './eventInput.jsx';
import { EventsList } from './eventsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    };
  }
  componentWillMount() {

  }
  render() {
    return (
      <div>
        <h1>Greenfield!</h1>
        <EventInput />
        <EventsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));