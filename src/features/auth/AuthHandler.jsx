import { useEffect } from "react";
import { useLazyAuthRefreshQuery } from "../../api/authApi";
import { useAppDispatch } from "../../app/hooks";
import { logInKey } from "../../config/localStorage";
import { authSignout } from "./authSlice";

const AuthHandler = ({ children }) => {
  const dispatch = useAppDispatch();
  const [refreshAuth] = useLazyAuthRefreshQuery();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // look for localstorage loginkey
        const isLoggedIn = localStorage.getItem(logInKey) === "TRUE";
        if (!isLoggedIn) throw new Error("user not loggedin");
        // if there is a loginkey then refresh auth
        await refreshAuth().unwrap();
      } catch (error) {
        console.log(error);
        // remove localstorage loginkey
        localStorage.removeItem(logInKey);
        // signout from authslice
        dispatch(authSignout());
      }
    };
    fetchStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default AuthHandler;
