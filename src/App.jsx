import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/shared/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Tech } from "./pages/Tech";
import { Programming } from "./pages/Programming";
import { Research } from "./pages/Research";
import { BlogDetails } from "./pages/BlogDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/research" element={<Research />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
