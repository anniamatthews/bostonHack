import React, { useState } from 'react';


/**
 * This code is nowhere near completed. 
 * I wanted to use this hackathon to get more familiar with React and Git, 
 * so that was exactly what I did
 * 
 */


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          console.log(data);
          // handle response data
        } catch (error) {
          console.error(error);
          // handle error
        }
      };



    return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      );



    function newFunction() {
        return useState('');
    }
}




export default login;