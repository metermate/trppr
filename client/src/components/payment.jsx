import React, {Component} from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';

import axios from 'axios';
import NavBar from './navBar.jsx'

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <NavBar />

        <form id="checkout-form" action="/checkout" method="post">
          <div id="error-message"></div>

          <label htmlFor="card-number">Card Number</label>
          <div className="hosted-field" id="card-number"></div>
          <div><img src=""/></div>

          <label htmlFor="cvv">CVV</label>
          <div className="hosted-field" id="cvv"></div>

          <label htmlFor="expiration-date">Expiration Date</label>
          <div className="hosted-field" id="expiration-date"></div>

          <input type="hidden" name="payment-method-nonce" />
          <input type="submit" value="Submit Payment" disabled />
        </form>
      </div>
    )
  }
}

export default Payment;
