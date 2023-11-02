import Post from '../post/post';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectPosts } from '../../redux/posts/postsSlice';
import { selectComments } from '../../redux/comments/commentsSlice';
import { useDispatch } from 'react-redux';


const DiscoverFeed = () => {
  const [posts, setPosts] = useState([]);
  const { postArray, loading } = useSelector(selectPosts);
  const { commentArray } = useSelector(selectComments);
  const dispatch = useDispatch()
  

  if (postArray.length === 0) {
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
