import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import './style.css';
import { Body1, H1, H2 } from '../../components/Typography';
import { useProductContext } from '../../context/ProductContext';

export const ProductPage = () => {
  const { product, isLoading, getSingleProduct } = useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    navigate(PATHS.PRODUCTS.EDIT.replace(':id', id), { replace: true });
  };
  useEffect(() => {
    getSingleProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='view'>
          <H1>Store {product?.id}</H1>
          <H2>{product?.name}</H2>
          <Body1>{product.quantity}</Body1>
        </div>
      )}
      <button className='view_btn' onClick={handleEdit}>
        Edit
      </button>
    </>
  );
};
