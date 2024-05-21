export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export const updateProduct = (product) => ({
  type: 'UPDATE_PRODUCT',
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: 'DELETE_PRODUCT',
  payload: productId,
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});
