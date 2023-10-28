import { Route, Routes } from "react-router-dom";
import { CreateBlog } from "./components/CreateBlog";
import { EditBlog } from "./components/EditBlog";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";
import BlogLayout from "./layout/BlogLayout";
import { Admin } from "./pages/Admin";
import { BlogDetails } from "./pages/BlogDetails";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Programming } from "./pages/Programming";
import { Register } from "./pages/Register";
import { Research } from "./pages/Research";
import { Tech } from "./pages/Tech";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<BlogLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/programming" element={<Programming />} />
        </Route>
        <Route path="/research" element={<Research />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-blog" element={<EditBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
