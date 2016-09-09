import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './app.jsx'
import NavBar from './src/components/navBar.jsx';
import CreateTrip from './src/components/createTrip.jsx';
import Signup from './src/components/signUp.jsx';
import Logout from './src/components/logout.jsx';
import UserProfile from './src/components/userProfile.jsx';
import Payment from './src/components/payment.jsx';
import AutoSearchBar from './src/components/autocompleteSearchBar.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { endLocation: '' };
    this.submitData = this.submitData.bind(this);
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  submitData(location) {
    // e.preventDefault();
    const link = '/app/' + location
    browserHistory.push(link);
  }

  render() {
    return (
      <div id="landingBody">
        <img id="landingLogo" src="trpperLogo-small.png"></img>
        <div id="landingBodyPane">
          <div className="container">
            <h1> Where are you going? </h1>
              <form onSubmit={this.submitData}>
                <AutoSearchBar submitData = {this.submitData} />
              </form>
          </div>
        </div>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={Landing} />
    <Route path='app(/:location)' name='app' component={App} />
    <Route path='create' component={CreateTrip} />
    <Route path='signUp' component={Signup} />
    <Route path='logOut' component={Logout} />
    <Route path='userProfile' component={UserProfile} />
    <Route path='payment' component={Payment} />
  </Router>
), document.getElementById('app'));
