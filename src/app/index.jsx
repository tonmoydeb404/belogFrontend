import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AuthHandler from "../features/auth/AuthHandler";
import router from "./router";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <AuthHandler>
        <RouterProvider router={router} />
      </AuthHandler>
    </Provider>
  );
};

export default App;
