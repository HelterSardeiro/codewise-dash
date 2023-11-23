import Activity from "views/pages/Activity";
import VirtualAssistant from "views/pages/VirtualAssistant";
import CodeAnalysis from "views/subPages/CodeAnalysis";

var dashRoutes = [
  {
    path: "/",
    name: "Atividades",
    icon: "design_app",
    component: <Activity />,
    layout: "/dash",
  },
  {
    collapse: true,
    path: "/virtualAssistant",
    name: "Virtual Assistant",
    icon: "users_single-02",
    component: <VirtualAssistant />,
    layout: "/dash",
    views: [
      {
        path: "/perfomance_report",
        name: "Relatorio de Desempenho",
        mini: "",
        component: <CodeAnalysis />,
        layout: "/dash",
      }
    ],
  }
];
export default dashRoutes;
