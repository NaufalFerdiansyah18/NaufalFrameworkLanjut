import { Routes, Route } from "react-router-dom";
import Dashboard from "./assets/pertemuan-5/pages/Dashboard";
import Orders from "./assets/pertemuan-5/pages/Orders";
import Customer from "./assets/pertemuan-5/pages/Customer";
import NotFound from "./assets/pertemuan-5/pages/NotFound";
import Error400 from "./assets/pertemuan-5/pages/Error400";
import Error401 from "./assets/pertemuan-5/pages/Error401";
import Error403 from "./assets/pertemuan-5/pages/Error403";
import { MainLayout } from "./assets/pertemuan-5/layouts/MainLayout";
import AuthLayout from "./assets/pertemuan-5/layouts/AuthLayouth";
import Login from "./assets/pertemuan-5/pages/auth/Login";
import Register from "./assets/pertemuan-5/pages/auth/Register";
import Forgot from "./assets/pertemuan-5/pages/auth/Forgot";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>} >
            <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customer />} />
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
  );
}

export default App;
