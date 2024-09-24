import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {BreadcrumbsContext} from "../context/BreadcrumbsContext";

const pageTitle = {
    products: "All Products",
    categories: "All Categories",
    sales: "All Sales",
    cart: "Shopping cart"
}

const pagesBlacklist = ["cart", "404"];

export const useBreadcrumbs = () => {
    const location = useLocation();
    const {setCrumbs} = useContext(BreadcrumbsContext);
    const {productId, categoryId} = useParams();
    const page = location.pathname.split("/").filter((pathItem) => pathItem !== "")[0];

    const crumbsArray = page && !pagesBlacklist.includes(page) ? [
        {
            path: "/",
            label: "Main Page"
        },
        {
            path: `/${page}`,
            label: pageTitle[page]
        }] : [];


    const category = useSelector((state) => state.categoriesReducer.categories
        .find((category) => category.id === Number(categoryId)));

    if (category) {
        crumbsArray.push({
            path: `/${page}/${categoryId}`,
            label: category.title
        });
    }

    const product = useSelector((state) => state.productsReducer.products
        .find((product) => product.id === Number(productId)));

    if (category && product) {
        crumbsArray.push({
            path: `/${page}/${categoryId}/${productId}`,
            label: product.title
        });
    }

    if (!(category) && product) {
        crumbsArray.push({
            path: `/${page}/${productId}`,
            label: product.title
        });
    }

    useEffect(() => {
        setCrumbs(crumbsArray);

    }, [location]);

}