import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('popular');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(data => setPosts(data.data.children.map(c => c.data)))
      .catch(err => setError(err));
  }, [subreddit]);

  if (error) {
    return <div>An error occurred: {error.message}</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Reddit Client</h1>
        <SearchBar onSearch={(term) => setSubreddit(term)} />
        <Posts posts={posts} />
      </header>
    </div>
  );
}

export default App;
