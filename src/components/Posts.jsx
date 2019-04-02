import React, { Component } from 'react';

import faker from 'faker'

class Posts extends Component {
  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}></img>
          </a>
          <div className="content"><a href="/" className="author">Sam</a>
            <div className="metadata">
              <span className='date'>Today at 6:00PM</span>
            </div>
            <div className="text">Sweet Blog Post</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;