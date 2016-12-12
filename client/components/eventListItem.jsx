import React from 'react';

const EventListItem = (props) => {
  return (
    <ul className='item' onClick={function() { props.removeEvent(props.event.title); }}>
      <div>
        <li>{props.event.title}</li>
        <li>{props.event.city_name}</li>
      </div>
    </ul>
  );
};

export { EventListItem } ;