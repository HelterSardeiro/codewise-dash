import Icons from "views/Icons";
import LoginPage from "views/Login";
import RegisterPage from "views/Register";

var authRoutes = [
  {
    path: "/login",
    name: "Dashboard",
    icon: "design_app",
    component: <LoginPage />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "design_app",
    component: <RegisterPage />,
    layout: "/auth",
  },
];

export default authRoutes;
