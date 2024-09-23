
export const localCartMiddleware = store => next => action => {
    const result = next(action);
    const { cartReducer } = store.getState();
    localStorage.setItem('cartProducts', JSON.stringify(cartReducer.cartProducts));
    return result;
}