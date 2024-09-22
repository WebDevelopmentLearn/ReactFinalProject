
export const localCartMiddleware = store => next => action => {
    const result = next(action); // передаем действие дальше
    // const { cartReducer } = store.getState();
    // localStorage.setItem('cartProducts', JSON.stringify(cartReducer.products));
    //
    //
    // const result = next(action); // передаем действие дальше

    // Проверяем, нужно ли сохранить данные в LocalStorage
    console.log(store.getState());
    const { cartReducer } = store.getState(); // получаем текущее состояние списка задач
    console.log('cartProducts', cartReducer);
    console.log('cartReducer.cartProducts', cartReducer.cartReducer);

    localStorage.setItem('cartProducts', JSON.stringify(cartReducer.cartProducts)); // сохраняем в LocalStorage

    // return result;
    return result;
}