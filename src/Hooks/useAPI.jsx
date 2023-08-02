import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';

const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';
const EDIT = 'EDIT';
const GET_SINGLE = 'GET_SINGLE';

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
  product: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case 'SET_Error':
      return { error: action.payload };
    case GET:
      return { ...state, products: action.payload, isLoading: false };
    case POST:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
      };
    case DELETE:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        isLoading: false,
      };

    case EDIT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == action.payload.id ? action.payload.data : product
        ),
        isLoading: false,
      };

    case GET_SINGLE:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
const useAPI = (url) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getProducts = () => {
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .get(url)
      .then(({ data }) => {
        dispatch({ type: GET, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

  const postProduct = (p) => {
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .post(url, p)
      .then(({ data }) => {
        dispatch({ type: POST, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
  const getSingleProduct = (id) => {
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .get(url + '/' + id)
      .then(({ data }) => {
        dispatch({ type: GET_SINGLE, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
  const editProduct = (id, body) => {
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .put(url + '/' + id, body)
      .then(({ data }) => {
        dispatch({ type: EDIT, payload: data });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
  const deleteProduct = (id) => {
    dispatch({ type: SET_LOADING, payload: true });

    axios
      .delete(url + '/' + id)
      .then(() => {
        dispatch({ type: DELETE, payload: id });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
  // useEffect(getProducts, []);

  return {
    products: state.products,
    isLoading: state.isLoading,
    error: state.error,
    product: state.product,
    getProducts,
    getSingleProduct,
    postProduct,
    deleteProduct,
    editProduct,
  };
};
export default useAPI;
