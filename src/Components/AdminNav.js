import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/admin');
    };

    return (
        <div className="container1">
            <center>
                <NavLink to="/ProductMaterials">Product Stock</NavLink>
                <NavLink to="/Supplier">Supplier details</NavLink>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </center>
        </div>
    );
};

export default AdminNav;
