import React, { useEffect } from 'react';
import { H1 } from '../../components/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { StoreForm } from '../../components/StoreForm';
import { PATHS } from '../../router/paths';
import { useProductContext } from '../../context/ProductContext';

export const EditProductPage = () => {
  const { product, isLoading, getSingleProduct, editProduct } =
    useProductContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEditStore = (body) => {
    editProduct(id, body);
    navigate(PATHS.PRODUCTS.ROOT, { replace: true });
  };

  useEffect(() => {
    getSingleProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <H1>Edit product {id}</H1>

      <StoreForm
        product={product}
        handleSubmit={handleEditStore}
        isLoading={isLoading}
      />
    </div>
  );
};
