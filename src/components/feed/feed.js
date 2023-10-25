import Post from '../post/post';
import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/post/`, {
      headers: {
        'app-id': process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error('Error', error));
  }, []);

  return (
    <>
      {posts.map((post) => {
        const owner = post.owner || {}; // Ensure post.owner is an object
        return (
          <Post 
            key={post.id}
            postKey={post.id}
            userFirst={owner.firstName || 'Unknown'}
            userLast={owner.lastName || 'Unknown'}
            text={post.text}
            likes={post.likes}
            pp={owner.picture || 'default-picture-url'}
            time={post.publishDate}
            tags={post.tags}
            content={post.image}
          />
        );
      })}
    </>
  );
}

export default Feed;