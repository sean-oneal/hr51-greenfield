import React from 'react';
import ReactBootstrap from 'react-bootstrap';

EventListItem = (props) => {

  return (
    <ul className='item' onClick={function() { props.deleteUser(props.event.name); }}>
      <div> {props.event.name} </div>

    </ul>
  );
};

export { ListItem };