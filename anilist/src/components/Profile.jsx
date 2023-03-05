import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../CSS/Profile.css'
import NewNavBar from '../backup/NewNavBar';
import FavoritesNavBar from './FavoritesNavBar';

const Profile = () => {
    const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     // console.log(token)
    //     axios
    //     .get('http://localhost:8000/profile', {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
            
    //     })
    //     .then(res => res.json())
    //     .then(data => setUser(data.user))
    //     .catch(err => console.log(err));
    // }, [])

//   useEffect(() => {
//     fetch('http://localhost:8000/profile', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//     .then(res => res.json())
//     .then(data => setUser(data.user))
//     .catch(err => console.log(err));
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <section>
        <div className='container'> 
            <nav>
                {/* <NewNavBar/> */}
                <FavoritesNavBar />   
            </nav>
            
        </div>
    <div className='profile-container'>
        
      {/* <h1>Profile</h1> */}
      {/* {user ? (
      <> */}
      {/* <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p> */}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Save Changes
        </button>
      </form>
      {/* </>
      ) : (
        <p>Loading user data...</p>
      )} */}
    </div>
    </section>
  );
};

export default Profile;
