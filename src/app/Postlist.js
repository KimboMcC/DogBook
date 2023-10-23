import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    

    // Fetch data from the DummyAPI.io 'posts' endpoint
    fetch('https://dummyapi.io/data/v1/post', {
      headers: {
        'app-id': process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.text}</h2>
            <p>Created by: {post.owner.firstName} {post.owner.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;