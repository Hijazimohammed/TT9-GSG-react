export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCTS: {
    ROOT: '/products',
    VIEW: `/products/:id`,
    CREATE: '/products/create',
    EDIT: '/products/:id/edit',
  },
  ADMIN: {
    ROOT: '/admin',
  },
  ERRORS: {
    NOT_FOUND: '404',
  },
};

export const AUTH_API_ENDPOINT = {
  LOGIN: 'users/login',
  SIGNUP: 'users/signup',
  PROFILE: ' users/profile',
  USERS: ' users',
};
