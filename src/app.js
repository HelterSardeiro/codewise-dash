import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { Context } from "./context/AuthContext";

import AdminLayout from "layouts/Admin.js";
import PrivateRoute from "layouts/PrivateRoute";
import Auth from "layouts/Auth";

function App() {

    return (
        <AuthProvider>
            <Routes>
                <Route path="/dash/*" element={
                    <PrivateRoute>
                        <AdminLayout />
                    </PrivateRoute>
                } />
                <Route path="/auth/*" element={<Auth />} />
                <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;