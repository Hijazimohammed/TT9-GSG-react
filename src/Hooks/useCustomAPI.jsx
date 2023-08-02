import axios from 'axios';
import { PRODUCT_ACTIONS } from '../constants/ProductActions';
import { useReducer } from 'react';
import product_reducer from '../reducer/ProductReducer';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  product: {},
  message: '',
};
const useCustomAPI = (url) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);

  const getProducts = async () => {
    try {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_START, payload: true });
      const { data } = await axios(url);

      dispatch({ type: PRODUCT_ACTIONS.REQUEST_SUCCESS_GET, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_FAILURE, payload: error });
    }
  };

  const postProduct = async (p) => {
    try {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_START, payload: true });
      const { data } = await axios.post(url, p);
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_SUCCESS_POST, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_FAILURE, payload: error });
    }
  };
  const getSingleProduct = async (id) => {
    try {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_START, payload: true });
      const { data } = await axios.get(url + '/' + id);
      dispatch({
        type: PRODUCT_ACTIONS.REQUEST_SUCCESS_SINGLE_GET,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_FAILURE, payload: error });
    }
  };
  const editProduct = async (id, body) => {
    try {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_START, payload: true });
      const { data } = await axios.put(url + '/' + id, body);
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_SUCCESS_PUT, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_FAILURE, payload: error });
    }
  };
  const deleteProduct = async (id) => {
    try {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_START, payload: true });
      await axios.delete(url + '/' + id);
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_SUCCESS_DELETE, payload: id });
    } catch (error) {
      dispatch({ type: PRODUCT_ACTIONS.REQUEST_FAILURE, payload: error });
    }
  };

  return {
    state,
    getProducts,
    getSingleProduct,
    postProduct,
    deleteProduct,
    editProduct,
  };
};
export default useCustomAPI;
