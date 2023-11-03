import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Callback from "../pages/Auth/Callback";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard";
import Posts from "../pages/Dashboard/Posts";
import CreatePost from "../pages/Dashboard/Posts/CreatePost";
import UpdatePost from "../pages/Dashboard/Posts/UpdatePost";
import Home from "../pages/Home";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/auth-callback",
        element: <Callback />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/create",
        element: <CreatePost />,
      },
      {
        path: "posts/:id",
        element: <UpdatePost />,
      },
    ],
  },

  {
    element: <AppLayout withNav={false} />,
    children: [
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
