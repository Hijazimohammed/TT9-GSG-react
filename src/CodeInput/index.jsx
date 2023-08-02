import React from 'react';
import './style.css';
const CodeInput = ({ name, ref, type, onChange }) => {
  return <input type={type} name={name} ref={ref} onChange={onChange} />;
};

export default CodeInput;
