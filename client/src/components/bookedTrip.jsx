import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';

const BookedTrip = (props) => {
    return (
        <div className="container" id="tripEntry">
            <div className="row" id="tripRow">
                <div className="col-sm-4 other">
                    <div id="tripTag">Driver Name</div>
                    <p>{props.trip.driverName}</p>
                </div>

                <div className="col-sm-4 other">
                    <div id="tripTag">Price per Seat:</div>
                    <p>$ {props.trip.seatPrice}</p>
                </div>

                {/* <div className="col-sm-4 other">
                    <div id="tripTag">Vehicle:</div>
                    <p>{props.trip.vehicleYear} {props.trip.vehicleMake} {props.trip.vehicleModel}</p>
                </div> */}
            </div>

            <div className="row" id="tripRow">
                <div className="col-sm-4 other">
                    <div id="tripTag">Trip Dates:</div>
                    <p>{moment(props.trip.tripDate).format('MM-DD-YYYY')}</p>
                </div>

                <div className="col-sm-4 other">
                    <div id="tripTag">Pick-up Address:</div>
                    <p>{props.trip.startCity} {props.trip.startState}</p>
                </div>

                <div className="col-sm-4 other">
                  <div id="tripTag">Drop-off Address:</div>
                  <p>{props.trip.endCity} {props.trip.endState}</p>
                </div>
            </div>

            <div className="row" id="tripRow">
                <div className="col-sm-12 other">
                    <div id="tripTag">Trip Details:</div>
                    <p>{props.trip.description}</p>
                </div>
            </div>
          </div>
      );
}

export default BookedTrip;
