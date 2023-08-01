import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.selftext}</p>
      <a href={post.url} target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
}

export default Post;
