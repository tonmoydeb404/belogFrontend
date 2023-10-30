import ReactDOM from "react-dom/client";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
