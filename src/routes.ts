import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Diseno";
import { Dashboard } from "./components/pages/PanelDeControl";
import { Result } from "./components/pages/Resultado";
import { Training } from "./components/pages/Entrenamiento";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "resultado", Component: Result },
      { path: "entrenamiento", Component: Training },
    ],
  },
]);