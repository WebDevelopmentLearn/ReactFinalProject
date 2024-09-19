import {Route, Routes} from "react-router-dom";
import {Categories, Category, Home, NotFound, Products, Product} from "../pages";

export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}