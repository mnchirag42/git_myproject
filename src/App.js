import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import RawMaterials from "./Components/RawMaterials";
import MaterialDetail from "./Components/MaterialDetail";
import AdminLogin from "./Components/AdminLogin";
import Form from "./Components/Form";
import { UserProvider } from "./Components/Usercontext"; 
import logo from "./Components/images/logo.png";
import ProductDetail from "./Components/ProductDetail";
import ProductMaterials from "./Components/ProductMaterials";
import Supplier from "./Components/Supplier";
import SupplierDetails from "./Components/SupplierDetails";
import { OrderProvider } from './Components/OrderContext'; 
import Orders from "./Components/Orders";

function App() {
  return (
    <UserProvider>
      <OrderProvider> {/* Wrap everything that needs OrderContext access */}
        <div className="container">
          <center>
            <header className="header">
              <div className="logo img">
                <img src={logo} alt="Logo" />
              </div>
              <div className="title">Herbal Products for Beauty and Immunity</div>
            </header>

            {/* Navigation Links */}
            <nav className="container1 a">
              <div className="container1 a.active">
                <ul>
                  <Link to="/">Home</Link>
                  <Link to="/raw-materials">Raw Materials</Link>
                  <Link to="/admin">Admin Login</Link>
                </ul>
              </div>
            </nav>
          </center>

          {/* Routes Definition */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
            <Route path="/material/:materialId" element={<MaterialDetail />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/ProductMaterials" element={<ProductMaterials />} />
            <Route path="/Supplier" element={<Supplier />} />
            <Route path="/SupplierDetail/:id" element={<SupplierDetails />} />
            <Route path="/Orders" element={<Orders />} /> 
          </Routes>
        </div>
      </OrderProvider>
    </UserProvider>
  );
}

export default App;
