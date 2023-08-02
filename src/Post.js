import React from 'react';
import './Post.css';

function Post({ post }) {
  // Calculate the date
  const date = new Date(post.created_utc * 1000).toLocaleDateString();

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>Posted by: {post.author}</p>
      <p>Date: {date}</p>
      <p>Number of comments: {post.num_comments}</p>
      <p>{post.selftext}</p>
      <a href={post.url} target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
}

export default Post;
