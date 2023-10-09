import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Inicio from "./pages/Inicio";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Trabajadores from "./pages/Trabajadores";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Inicio />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/trabajadores",
    element: (
      <ProtectedRoutes>
        <Trabajadores />
      </ProtectedRoutes>
    ),
  },
]);

export default router;
