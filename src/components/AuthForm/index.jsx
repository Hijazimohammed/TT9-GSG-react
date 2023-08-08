import React, { useState } from 'react';

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
const AuthForm = ({ handleSubmit }) => {
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
      username: userName,
      password: password,
    };
    handleSubmit(data);
  };

  return (
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
      <button type='submit'>submit</button>
    </form>
  );
};

export default AuthForm;
