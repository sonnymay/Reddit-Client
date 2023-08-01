import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setPosts(data.data.children.map(c => c.data)));
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Reddit Client</h1>
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        <Posts posts={posts} />
      </header>
    </div>
  );
}

export default App;
