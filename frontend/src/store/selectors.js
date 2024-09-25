import {createSelector} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

export const cart = (state) => state.cartReducer.cartProducts;
const products = (state) => state.productsReducer.products;
export const filter = (state) => state.filterReducer;
export const categories = (state) => state.categoriesReducer.categories;



export const currentCategoryTitle = createSelector(categories,
    (state, categoryId) => categoryId,
    (categories, categoryId) => categories.find((cat) => cat.id === categoryId)?.title);

export const filteredProducts = createSelector(
    products, filter, cart,
    (_, categoryId) => categoryId,
    (productsFromState, filterFromState, cart, categoryId) => {
        console.log("categoryId", categoryId);
        const products = categoryId
            ? [...productsFromState.filter((product) => product.categoryId === Number(categoryId))]
            : [...productsFromState];
    console.log("products", products);
    if (filterFromState.isDiscount) {
        return products
            .filter((product) => product.discont_price !== null)
            .filter((product) => {
                return product.discont_price >= filterFromState.price.from && product.discont_price <= filterFromState.price.to;
            })
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
            }).map((product) => {
                if (cart.find((item) => product.id === item.id )) {
                    return {...product, isInCart: true};
                } else {
                    return product;
                }
            });
    } else {
        return products
            .filter((product) => {
                // console.log("product.price", product);
                return product.discont_price ?
                    product.discont_price >= filterFromState.price.from && product.discont_price <= filterFromState.price.to :
                    product.price >= filterFromState.price.from && product.price <= filterFromState.price.to;
            })
            .sort((a, b) => {
                if (filterFromState.sort === "newest") {
                    return b.id - a.id;
                }
                if (filterFromState.sort === "price-low-high") {
                   return ((a.discont_price ?? a.price) - (b.discont_price ?? b.price));
                }
                if (filterFromState.sort === "price-high-low") {
                    return ((b.discont_price ?? b.price) - (a.discont_price ?? a.price));
                }
                return a.id - b.id;
            }).map((product) => {
                if (cart.find((item) => product.id === item.id )) {
                    return {...product, isInCart: true};
                } else {
                    return product;
                }
            });
    }
});



export const calculateSum = createSelector([cart], (cart) => {
    return cart?.reduce((acc, item) => {
        return item.discont_price ?
            item.discont_price * item.quantity + acc :
            item.price * item.quantity + acc;
    }, 0);
});



export const selectProductById = createSelector(
    (state) => state?.productsReducer?.products, (state) => state?.cartReducer?.cartProducts,
    (state, productId) => productId,
    (products, cartProducts, productId) => {
        const productInCart = cartProducts?.find((item) => item.id === Number(productId));
        if (productInCart) {
            return productInCart;
        } else {
            return products.find((item) => item.id === Number(productId));
        }
    }
);