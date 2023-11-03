import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = searchParams.get("auth");
    const goTo = searchParams.get("goTo");

    if (auth) {
      fetch("http://localhost:9090/api/v1/auth/result", {
        credentials: "include",
      })
        .then((response) => {
          return response.json();
        })
        .then((v) => {
          if (v?.status === "ERROR") localStorage.removeItem("BELOG_AUTH");
          if (v?.status === "SUCCESS")
            localStorage.setItem("BELOG_AUTH", "AUTHENICATED");
          console.log(v);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("BELOG_AUTH");
        });

      navigate(goTo || "/");
    }
  }, [searchParams, navigate]);

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
