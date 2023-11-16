import Activity from "views/pages/Activity";
import VirtualAssistant from "views/pages/VirtualAssistant";
import CodeAnalysis from "views/subPages/CodeAnalysis";
import CodeCorrection from "views/subPages/CodeCorrection";
import TipsAndSuggestions from "views/subPages/TipsAndSuggestions";

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
        path: "/code_analysis",
        name: "Analise de Codigo",
        mini: "",
        component:  <CodeAnalysis />,
        layout: "/dash",
      },
      {
        path: "/code_correction",
        name: "Correção de Codigo",
        mini: "",
        component: <CodeCorrection />,
        layout: "/dash",
      },
      {
        path: "/tips_suggestions",
        name: "Dicas e Sugestões",
        mini: "",
        component: <TipsAndSuggestions />,
        layout: "/dash",
      }
    ],
  }
];
export default dashRoutes;
