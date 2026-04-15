import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Dashboard } from "./components/pages/Dashboard";
import { Result } from "./components/pages/Result";
import { Training } from "./components/pages/Training";

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