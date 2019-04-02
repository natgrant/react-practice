import React, { Component, Fragment } from 'react';
import Posts from "./Posts"
import faker from 'faker'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Posts img={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        <Posts img={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        <Posts img={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
      </Fragment>
    );
  }
}

export default App;
