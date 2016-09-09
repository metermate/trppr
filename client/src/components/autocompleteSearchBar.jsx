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
    var address = suggestion.label.split(",")
    this.setState({ locArray: address });
    // console.log("locArray: " + this.state.locArray)
    var link = [this.state.locArray[1], this.state.locArray[2]];
    // console.log("This is link: " + link)
    this.props.submitData(link)
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
            onChange={this.handleSearchChange}
        />
      </div>
    )
  }
}

export default AutoSearchBar;
