import React, { Component, Fragment } from 'react';
import Posts from "./Posts"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null
    }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      err => console.log(err)
    );
  }
  render() {
    return (
      <Fragment>
        <div>Your latitude: {this.state.lat}</div>
        <Posts />
      </Fragment>
    );
  }
}

export default App;
