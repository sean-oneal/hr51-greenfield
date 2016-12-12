import React from 'react';
import { EventListItem } from './eventListItem.jsx';

const EventsList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.events.map(event => {
        console.log(event);
        return (
        <EventListItem event={event} key={eventId} removeEvent={props.removeEvent} />
        );
      })};
    </ul>
  );
};


export { EventsList };