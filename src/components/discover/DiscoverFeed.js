import Post from '../post/post';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectPosts } from '../../redux/posts/postsSlice';


const DiscoverFeed = () => {
  const [posts, setPosts] = useState([]);
  const postsState = useSelector(selectPosts);
  const { postArray, loading } = postsState;

  if (postArray.length === 0) {
    console.log(postsState)
    return <div>No posts available.</div>;
  }

  return (
    <>
      {postArray.map((post) => {
        const owner = post.owner || {}; 
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

export default DiscoverFeed;