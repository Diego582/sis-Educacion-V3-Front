import { createBrowserRouter } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
