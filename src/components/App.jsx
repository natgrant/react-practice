import React, { Component, Fragment } from 'react';
import Posts from "./Posts"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      errMessage: ''
    }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      err => {
        this.setState({
          errMessage: err.message
        })
      }
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>
    }
    if (!this.state.errMessage && this.state.lat) {
      return <div>Your latitude: {this.state.lat}</div>
    }
    return (
      <Posts />
    )
  }
}

export default App;
