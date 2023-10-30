import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "authRoutes.js";

var ps;

function Auth(props) {

  return (
    <div className="wrapper wrapper-full-page">
      <Routes>
        {routes.map((prop, key) => {
          return (
            <Route
              path={prop.path}
              element={prop.component}
              key={key}
              exact
            />
          );
        })}
        <Route
          path="/admin"
        />
      </Routes>
    </div>
  );
}

export default Auth;
