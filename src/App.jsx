import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Dashboard/Posts";
import CreatePost from "./pages/Dashboard/Posts/CreatePost";
import UpdatePost from "./pages/Dashboard/Posts/UpdatePost";
import Home from "./pages/Home";

import Login from "./pages/Auth/Login";
import Reset from "./pages/Auth/Reset";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-auth" element={<Reset />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/create" element={<CreatePost />} />
          <Route path="posts/:id" element={<UpdatePost />} />
        </Route>

        <Route element={<AppLayout withNav={false} />}>
          <Route path="/post" element={<Post />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
