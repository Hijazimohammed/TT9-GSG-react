import React, { useState } from 'react';
import AuthForm from '../AuthForm';
import { useAuthContext } from '../../context/AuthContext';

const inputsArray = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    label: 'UserName',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
  },
];

export const Login = () => {
  const { login, isLoading } = useAuthContext();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => {
    e.target.name == 'username'
      ? setUserName(e.target.value)
      : setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: userName,
      password: password,
    };
    console.log(data);
    login(data);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Login</h1>
      <form onSubmit={onSubmitHandler}>
        {inputsArray.map((input) => (
          <div key={input.id} className='form_control'>
            <label htmlFor={input.id}>{input.label}</label>
            <input
              onChange={onChangeHandler}
              value={input.name == 'username' ? userName : password}
              type={input.type}
              name={input.name}
              id={input.id}
            />
          </div>
        ))}
        <button type='submit'>{isLoading ? 'loading...' : 'submit'}</button>
      </form>
    </>
  );
};
