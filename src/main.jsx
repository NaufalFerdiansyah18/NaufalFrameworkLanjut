import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Sidebar from "./assets/pertemuan-5/layouts/Sidebar";
import Header from "./assets/pertemuan-5/layouts/Header";
import Dashboard from "./assets/pertemuan-5/pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#f3f4f6] min-h-screen flex font-poppins text-gray-800">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <Header />
        <Dashboard />
      </div>
    </div>
  </React.StrictMode>
);
