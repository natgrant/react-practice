import React from 'react';

const Posts = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
        </a>
        <div className="content"><a href="/" className="author">{props.author}</a>
          <div className="metadata">
            <span className='date'>{props.timeAgo}</span>
          </div>
          <div className="text">{props.post}</div>
        </div>
      </div>
    </div>
  );
}

export default Posts;