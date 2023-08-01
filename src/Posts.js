import React, { useEffect, useState } from 'react';
import Post from './Post';  // Importing Post component
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/popular.json')
      .then(response => response.json())
      .then(data => setPosts(data.data.children.map(c => c.data)));
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
}

export default Posts;
