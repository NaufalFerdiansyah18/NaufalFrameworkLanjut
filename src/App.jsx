import { Routes, Route } from "react-router-dom";
// import Dashboard from "./assets/pertemuan-5/pages/main/Dashboard";
// // import Orders from "./assets/pertemuan-5/pages/main/Orders";
// import Customer from "./assets/pertemuan-5/pages/main/Customer";
// import NotFound from "./assets/pertemuan-5/pages/main/NotFound";
// import Error400 from "./assets/pertemuan-5/pages/main/Error400";
// import Error401 from "./assets/pertemuan-5/pages/main/Error401";
// import Error403 from "./assets/pertemuan-5/pages/main/Error403";
import { MainLayout } from "./assets/pertemuan-5/layouts/MainLayout";
import AuthLayout from "./assets/pertemuan-5/layouts/AuthLayouth";
// import Login from "./assets/pertemuan-5/pages/auth/Login";
// import Register from "./assets/pertemuan-5/pages/auth/Register";
// import Forgot from "./assets/pertemuan-5/pages/auth/Forgot";
import React, { Suspense } from "react";
// import Loading from "./assets/pertemuan-5/components/Loading";


const Dashboard = React.lazy(() => import("./assets/pertemuan-5/pages/main/Dashboard"))
const Orders = React.lazy(() => import("./assets/pertemuan-5/pages/main/Orders"))
const Customer = React.lazy(() => import("./assets/pertemuan-5/pages/main/Customer"))
const CustomerDetail = React.lazy(() => import("./assets/pertemuan-5/pages/main/CustomerDetail"))
const Produk = React.lazy(() => import("./assets/pertemuan-5/pages/main/Produk"))
const ProdukDetail = React.lazy(() => import("./assets/pertemuan-5/pages/main/ProdukDetail"))
const Products = React.lazy(() => import("./assets/pertemuan-5/pages/main/Products"))
const ProductDetail = React.lazy(() => import("./assets/pertemuan-5/pages/main/ProductDetail"))
const NotFound = React.lazy(() => import("./assets/pertemuan-5/pages/main/NotFound"))
const Error400 = React.lazy(() => import("./assets/pertemuan-5/pages/main/Error400"))
const Error401 = React.lazy(() => import("./assets/pertemuan-5/pages/main/Error401"))
const Error403 = React.lazy(() => import("./assets/pertemuan-5/pages/main/Error403"))


const Register = React.lazy(() => import("./assets/pertemuan-5/pages/auth/Register"))
const Login = React.lazy(() => import("./assets/pertemuan-5/pages/auth/Login"))
const Forgot = React.lazy(() => import("./assets/pertemuan-5/pages/auth/Forgot"))
const Loading = React.lazy(() => import("./assets/pertemuan-5/components/Loading"))








function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout/>} >
            <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customer />} />
      <Route path="/customers/:id" element={<CustomerDetail />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/produk/:id" element={<ProdukDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/error-400" element={<Error400 />} />
      <Route path="/error-401" element={<Error401 />} />
      <Route path="/error-403" element={<Error403 />} />
      <Route path="*" element={<NotFound />} />
      </Route>
       <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
    </Routes>
    </Suspense>

  );
}

export default App;
