import {Route, Routes} from "react-router-dom";
import {Categories, Category, Home, NotFound, Products, Product, Sales, Cart} from "../pages";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/categories/:categoryId/:productId" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}