import React, { useEffect } from 'react';
import Table from '../../components/Table';
import { PRODUCT_COLUMNS } from '../../constants/Products';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { useProductContext } from '../../context/ProductContext';

export const ProductsPage = () => {
  const { products, isLoading, getProducts, deleteProduct } =
    useProductContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteProduct(id);
  };
  const handleView = (row) => {
    navigate(PATHS.PRODUCTS.VIEW.replace(':id', row.id));
  };
  const handleCreate = () => {
    navigate(PATHS.PRODUCTS.CREATE);
  };
  const handleEdit = (id) => {
    navigate(PATHS.PRODUCTS.EDIT.replace(':id', id));
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Products</h1>

      <button onClick={handleCreate}>Create Product</button>
      <Table
        columns={PRODUCT_COLUMNS(handleDelete, handleEdit)}
        data={products}
        onRowClick={handleView}
        isLoading={isLoading}
      />
    </div>
  );
};
