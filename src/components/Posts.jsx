import React, { Component, Fragment } from 'react';
import PostContent from "./PostContent"
import ApprovalCard from "./ApprovalCard"

import faker from 'faker'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null
    }
  }
  render() {
    return (
      <Fragment>
        <ApprovalCard>
          <PostContent avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
        <ApprovalCard>
          <PostContent avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
        <ApprovalCard>
          <PostContent avatar={faker.image.avatar()} author={faker.name.firstName()} timeAgo="6:30PM" post={faker.lorem.sentence()} />
        </ApprovalCard>
      </Fragment>
    );
  }
}

export default Posts;