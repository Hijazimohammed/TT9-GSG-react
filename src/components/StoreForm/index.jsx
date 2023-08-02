import React, { useEffect, useState } from 'react';
import './style.css';
const inputsArray = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'quantity',
    name: 'quantity',
    type: 'textarea',
    label: 'Quantity',
  },
];

export const StoreForm = ({ handleSubmit = () => {}, isLoading, product }) => {
  const [name, setName] = useState(product?.name);
  const [quantity, setQuantity] = useState(product?.quantity);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const tempData = {
      name: name,
      quantity: quantity,
    };
    handleSubmit(tempData);
  };
  const onChangeHandler = (e) => {
    e.target.name == 'name'
      ? setName(e.target.value)
      : setQuantity(e.target.value);
  };

  useEffect(() => {
    setName(product?.name);
    setQuantity(product?.quantity);
  }, [product]);

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        {inputsArray.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === 'textarea' ? (
              <textarea
                id={input.id}
                name={input.name}
                value={quantity}
                onChange={onChangeHandler}
              />
            ) : (
              <input
                id={input.id}
                name={input.name}
                value={name}
                onChange={onChangeHandler}
              />
            )}
          </div>
        ))}

        <button type='submit'>{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
    </>
  );
};
