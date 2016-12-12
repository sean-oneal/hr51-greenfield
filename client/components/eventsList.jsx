import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { ListItem } from './eventListItem.jsx';

EventsList = (props) => {
  return (
    <div>
      (props.map(event => {
        <ListItem event={event} />
      }))
    </div>
  );
};


export { EventsList };