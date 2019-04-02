import React, { Component, Fragment } from 'react';
import Posts from "./Posts"
import ApprovalCard from "./ApprovalCard"
import faker from 'faker'

class App extends Component {
  render() {
    return (
      <Fragment>
        <ApprovalCard>
          <Posts avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
        <ApprovalCard>
          <Posts avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
        <ApprovalCard>
          <Posts avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
      </Fragment>
    );
  }
}

export default App;
