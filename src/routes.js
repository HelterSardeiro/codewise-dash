import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Activity from "views/pages/Activity";
import VirtualAssistant from "views/pages/VirtualAssistant";

var dashRoutes = [
  {
    path: "/",
    name: "Atividades",
    icon: "design_app",
    component: <Activity />,
    layout: "/dash",
  },
  {
    path: "/virtualAssistant",
    name: "Virtual Assistant",
    icon: "users_single-02",
    component: <VirtualAssistant />,
    layout: "/dash",
  }
];
export default dashRoutes;
