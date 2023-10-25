import React, { useState, useEffect } from 'react';

function Commentz({ }) {
  const [comments, setComments] = useState([]);

  const postId = '60d21bd267d0d8992e610e21'

  useEffect(() => {
    // Fetch comments for the specific post
    fetch(`https://dummyapi.io/data/v1/post/${postId}/comment`, {
      headers: {
        'app-id': process.env.REACT_APP_API_KEY, // Replace with your API key
      },
    })
      .then((response) => response.json())
      .then((data) => setComments(data.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  return (
    <>
      <div>
        <h3>Comments for Post ID: {postId}</h3>
        <div>
          <h4>Comments:</h4>
          {comments.map((comment) => (
            <p key={comment.id}>{comment.message}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Commentz;
