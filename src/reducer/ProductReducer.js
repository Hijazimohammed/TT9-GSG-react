import { PRODUCT_ACTIONS } from '../constants/ProductActions';

const product_reducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.REQUEST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCT_ACTIONS.REQUEST_SUCCESS_GET: {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case PRODUCT_ACTIONS.REQUEST_SUCCESS_SINGLE_GET: {
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    }
    case PRODUCT_ACTIONS.REQUEST_SUCCESS_POST: {
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
        message: 'Success',
      };
    }
    case PRODUCT_ACTIONS.REQUEST_SUCCESS_PUT: {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        isLoading: false,
        message: 'Success',
      };
    }
    case PRODUCT_ACTIONS.REQUEST_SUCCESS_DELETE: {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        isLoading: false,
        message: 'Success',
      };
    }
    case PRODUCT_ACTIONS.REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default product_reducer;
