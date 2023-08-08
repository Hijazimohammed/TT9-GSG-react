import React from 'react';
import AuthForm from '../AuthForm';

export const SignUp = () => {
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Signup</h1>
      <AuthForm handleSubmit={onSubmitHandler} />;
    </>
  );
};
