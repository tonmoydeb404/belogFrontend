import { Route, Routes } from "react-router-dom";
import { CreateBlog } from "./components/CreateBlog";
import { EditBlog } from "./components/EditBlog";
import AppLayout from "./layout/AppLayout";
import { Admin } from "./pages/Admin";
import { ForgotPassword } from "./pages/ForgotPassword";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Post from "./pages/Post";
import { Programming } from "./pages/Programming";
import { Register } from "./pages/Register";
import { Research } from "./pages/Research";
import { Tech } from "./pages/Tech";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/programming" element={<Programming />} />
        </Route>
        <Route element={<AppLayout withNav={false} />}>
          <Route path="/post" element={<Post />} />
        </Route>
        <Route path="/research" element={<Research />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-blog" element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;
