import {createSelector} from "@reduxjs/toolkit";

 const products = (state) => state.productsReducer.products;
export const filter = (state) => state.filterReducer;

export const filteredProducts = createSelector([products, filter], (productsFromState, filterFromState) => {
    const products = [...productsFromState];
    if (filterFromState.isDiscount) {
        return products
            .filter((product) => product.discont_price !== null)
            .filter((product) => product.discont_price >= filterFromState.price.from && product.discont_price <= filterFromState.price.to)
            .sort((a, b) => {
                if (filterFromState.sort === "newest") {
                    return b.id - a.id;
                }
                if (filterFromState.sort === "price-low-high") {
                    return a.discont_price - b.discont_price;
                }
                if (filterFromState.sort === "price-high-low") {
                    return b.discont_price - a.discont_price;
                }
                return a.id - b.id;
            });
    } else {
        return products
            .filter((product) => product.price >= filterFromState.price.from && product.price <= filterFromState.price.to)
            .sort((a, b) => {
                if (filterFromState.sort === "newest") {
                    return b.id - a.id;
                }
                if (filterFromState.sort === "price-low-high") {
                    return a.price - b.price;
                }
                if (filterFromState.sort === "price-high-low") {
                    return b.price - a.price;
                }
                return a.id - b.id;
            });
    }
});