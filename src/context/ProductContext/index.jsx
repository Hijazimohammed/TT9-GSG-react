import React, { useContext } from 'react';
import useCustomAPI from '../../Hooks/useCustomAPI';
import { SERVER_URL } from '../../config/api';

const ProductContext = React.createContext(null);

export const ProductProvider = ({ children }) => {
  const {
    state,
    getProducts,
    getSingleProduct,
    postProduct,
    deleteProduct,
    editProduct,
  } = useCustomAPI(SERVER_URL);
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        isLoading: state.isLoading,
        error: state.error,
        product: state.product,
        message: state.message,
        getProducts,
        getSingleProduct,
        postProduct,
        deleteProduct,
        editProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
