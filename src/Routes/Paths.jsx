import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../pages/Layout";
import ProductListingPage from "../pages/ProductListingPage";

const Paths = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="produtos" element={<ProductListingPage />} />
                <Route path="notfound" element={<NotFoundPage />} />
            </Route>
            {/* Rota coringa para NotFound */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
 
export default Paths;