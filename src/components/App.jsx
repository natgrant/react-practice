import React, { Component } from 'react';

class App extends Component {
  state = { lat: null, errMessage: '' }

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
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
      <div>Loading... </div>
    )
  }
}

export default App;
