import React from 'react'
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({children}) {
    const token=localStorage.getItem("token");
    const role=localStorage.getItem("role");

    if(!token){
        return <Navigate to={"/admin-login"} replace />
    }
    if(role!=="admin"){
        return <Navigate to={"/admin-login"}/>
    }
  return (
    children
  )
}

export default AdminProtectedRoute
