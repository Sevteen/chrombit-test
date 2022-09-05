import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "../utils/selectors";
import Layout from "../components/Layout/";

function Router() {
   const isLoggedIn = useRecoilValue(isLoggedInSelector);

   return (
      <Routes>
         <Route path="/" element={<Navigate replace to={isLoggedIn ? "/dashboard" : "/Login"} />} />
         {isLoggedIn ? (
            <Route path="/dashboard" element={<Layout> </Layout>} />
         ) : (
            <Route path="/Login" element={<Login />} />
         )}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
   );
}

export default Router;
