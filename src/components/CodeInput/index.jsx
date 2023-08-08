import React, { useRef } from 'react';
import './style.css';
const CodeInput = () => {
  const refs = useRef([]);
  const handleChange = (e) => {
    if (
      e.target.value.length === 1 &&
      e.target.name < refs.current.length - 1
    ) {
      refs.current[+e.target.name + 1].focus();
    }
    if (e.target.value.length === 0 && e.target.name > 0) {
      refs.current[+e.target.name - 1].focus();
    }
  };
  return (
    <>
      {[...Array.from(Array(10).keys())].map((ref, index) => (
        <input
          key={index}
          ref={(ref) => (refs.current[index] = ref)}
          name={index}
          type='text'
          onChange={handleChange}
        />
      ))}{' '}
    </>
  );
};

export default CodeInput;