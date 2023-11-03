import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLazyAuthResultQuery } from "../../api/authApi";
import { logInKey } from "../../config/localStorage";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [getAuthResult, { isSuccess, isError }] = useLazyAuthResultQuery();

  const goTo = searchParams.get("goTo");
  const auth = searchParams.get("auth");

  useEffect(() => {
    // if there is a auth key then get auth result
    if (auth) getAuthResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    if (isSuccess) {
      // add login key and navigate
      localStorage.setItem(logInKey, "TRUE");
      navigate(goTo);
    } else if (isError) {
      // remove loginkey from localstorage and navigate
      localStorage.removeItem(logInKey);
      navigate(goTo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, goTo]);

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <img
        src="https://cdn-images-1.medium.com/v2/resize:fit:350/1*q_dy5SuRV1491Ldw_TQzDQ.gif"
        alt=""
        className="w-[200px] rounded-full shadow-xl"
      />
    </div>
  );
};

export default Callback;
