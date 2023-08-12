import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  Login,
  OrderPage,
  PageNotFound,
  ProductsListPage,
  Register,
} from "../pages";
import { ProductDetail } from "../pages/ProductDetailPage";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const RouteLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsListPage />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
