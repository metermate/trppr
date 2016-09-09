import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';

class AutoSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locArray: ''
    }
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value })
  }

  handleSelectSuggest(suggestName, coordinate) {
    this.setState({ search: suggestName, selectedCoordinate: coordinate })
  }

  onSuggestSelect(suggestion){
    console.log("This is what you selected: " + suggestion.label);
    var address = suggestion.label.split(",")
    this.state.locArray = address;
    console.log("locArray: ", this.state.locArray);
  }

  render() {
    const { search } = this.state

    return (
      <div className="dropdown">
        <Geosuggest
            className="geosuggest"
            type="text"
            placeholder="Enter a location"
            onSuggestSelect={this.onSuggestSelect}
            onChange={ this.handleSearchChange }
            // onFocus={this.onFocus}
            // onBlur={this.onBlur}
            onSubmit={this.testing} />
      </div>
    )
  }
}

export default AutoSearchBar;
