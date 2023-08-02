import React from 'react';
import { H1 } from '../../components/Typography';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { StoreForm } from '../../components/StoreForm';
import { useProductContext } from '../../context/ProductContext';

export const CreateProductPage = () => {
  const { isLoading, postProduct } = useProductContext();
  const navigate = useNavigate();

  const handleCreateProduct = (body) => {
    postProduct(body);
    navigate(PATHS.PRODUCTS.ROOT, { replace: true });
  };
  return (
    <div>
      <>
        <H1>Create Store</H1>

        <StoreForm handleSubmit={handleCreateProduct} isLoading={isLoading} />
      </>
    </div>
  );
};
