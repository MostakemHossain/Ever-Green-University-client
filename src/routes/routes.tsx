import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashBoard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
]);
export default router;
