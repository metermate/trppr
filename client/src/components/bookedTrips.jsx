import React from 'react';
import {render} from 'react-dom';
import BookedTrip from './bookedTrip.jsx';

  const BookedTrips = (props) => {
     return (
       <div className="container">
         <div className="tripContainer">
           {props.trips.map((trip, index) => {
            return <BookedTrips key={index} trip={trip} />
           })}
         </div>
       </div>
     );
  }

export default BookedTrips;
