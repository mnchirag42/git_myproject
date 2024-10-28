import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';

function Adminlog() {
  return (
    <div>
      <AdminNav/>  
      <Outlet />  
    </div>
    );
}

export default Adminlog;