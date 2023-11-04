import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateOutlet from "../outlet/PrivateOutlet";
import PublicOutlet from "../outlet/PublicOutlet";
import RoleOutlet from "../outlet/RoleOutlet";
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
    element: <PublicOutlet />,
    children: [
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
    ],
  },

  {
    element: <PrivateOutlet />,
    children: [
      {
        element: (
          <RoleOutlet roles={["ADMIN", "EDITOR", "AUTHOR"]} redirect={"/"} />
        ),
        children: [
          {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                element: (
                  <RoleOutlet
                    roles={["ADMIN", "AUTHOR"]}
                    redirect={"/dashboard"}
                  />
                ),
                children: [
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
                element: (
                  <RoleOutlet
                    roles={["ADMIN", "EDITOR"]}
                    redirect={"/dashboard"}
                  />
                ),
                children: [
                  {
                    path: "categories",
                    element: <Posts />,
                  },
                  {
                    path: "categories/create",
                    element: <CreatePost />,
                  },
                  {
                    path: "categories/:id",
                    element: <UpdatePost />,
                  },
                  {
                    path: "pages",
                    element: <Posts />,
                  },
                  {
                    path: "pages/create",
                    element: <CreatePost />,
                  },
                  {
                    path: "pages/:id",
                    element: <UpdatePost />,
                  },
                ],
              },
              {
                element: (
                  <RoleOutlet roles={["ADMIN"]} redirect={"/dashboard"} />
                ),
                children: [
                  {
                    path: "users",
                    element: <Posts />,
                  },
                  {
                    path: "users/create",
                    element: <CreatePost />,
                  },
                  {
                    path: "users/:id",
                    element: <UpdatePost />,
                  },
                ],
              },
            ],
          },
        ],
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
