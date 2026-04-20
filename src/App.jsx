import { Routes, Route } from "react-router-dom";
import Dashboard from "./assets/pertemuan-5/pages/Dashboard";
import Orders from "./assets/pertemuan-5/pages/Orders";
import Customer from "./assets/pertemuan-5/pages/Customer";
import NotFound from "./assets/pertemuan-5/pages/NotFound";
import Error400 from "./assets/pertemuan-5/pages/Error400";
import Error401 from "./assets/pertemuan-5/pages/Error401";
import Error403 from "./assets/pertemuan-5/pages/Error403";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customer />} />
      <Route path="/error-400" element={<Error400 />} />
      <Route path="/error-401" element={<Error401 />} />
      <Route path="/error-403" element={<Error403 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
