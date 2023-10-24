import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the DummyAPI.io 'user' endpoint
    fetch('https://dummyapi.io/data/v1/user/id:60d0fe4f5311236168a109fa', {
      headers: {
        'app-id': process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <ul>
        {users.length > 0 ? ( // Check if users array has data
          users.map((user) => (
            <li key={user.id}>
              <img src={user.picture} alt={user.id} />
              <p>{user.firstName} {user.lastName}</p> {/* Fixed the casing of firstName and lastName */}
            </li>
          ))
        ) : (
          <p>Loading...</p> // Display a loading message while fetching data
        )}
      </ul>
    </div>
  );
}

export default User;