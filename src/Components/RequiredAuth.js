import { useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export function RequireAuth() {
  const auth = JSON.parse(sessionStorage.getItem('auth'));
  console.log(auth.user);
    let location = useLocation();
    return auth.user.uid?(
      <Navigate to="/payment" state={{ replace: true }}  />
    ):(
      <Navigate to="/signin" state={{ from: location }} replace />
    )
  
  }