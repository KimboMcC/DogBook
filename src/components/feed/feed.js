import Post from '../post/post';
import React, { useState, useEffect } from 'react'

const Feed = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://dummyapi.io/data/v1/post?limit=50', {
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
            {posts.map((post) => (
                <Post 
                    key={post}
                    userFirst={post.owner.firstName}
                    userLast={post.owner.lastName}
                    text={post.text}
                    likes={post.likes}
                    pp={post.owner.picture}
                    time={post.publishDate}
                    tags={post.tags}
                    content={post.image}
                />
            ))}
        </>
    )
}

export default Feed;

