import * as api from '../api/index';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const getUsers = (e) => {
    e.preventDefault();
    api
      .fetchUsers()
      .then((data) => data)
      .then((user) => console.log(user.data))
      .catch((e) => console.log(e));
  };
  const [user, setUser] = useState({ name: '', age: '', interests: [] });
  const postUsers = (e) => {
    e.preventDefault();
    api
      .postUser(user)
      .then((data) => data)
      .then((user) => console.log(user))
      .catch((e) => console.log(e, 'post failed'));
  };

  return (
    <form className='formContainer' action=''>
      <h1 className='formHeading'>C R U D</h1>
      <input
        className='formInput'
        type='text'
        placeholder='Name'
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        className='formInput'
        type='text'
        placeholder='Age'
        value={user.age}
        onChange={(e) =>
          setUser({ ...user, age: parseInt(e.target.value == '' ? '0' : e.target.value) })
        }
      />
      <input
        className='formInput'
        type='text'
        placeholder='Hobbies (comma separated)'
        value={user.interests}
        onChange={(e) => setUser({ ...user, interests: e.target.value.split(/[ ,]+/) })}
      />
      <button className='submitBtn' onClick={getUsers}>
        Get
      </button>
      <button className='submitBtn' onClick={postUsers}>
        post
      </button>
      <Link className='submitBtn' to='/'>
        back
      </Link>
    </form>
  );
};

export default Form;
