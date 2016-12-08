import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return <p> React Home Page is Live</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));