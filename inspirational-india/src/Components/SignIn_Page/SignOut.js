import * as React from "react";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

export default function signout() {
  const navigate = useNavigate();

  const handleSubmit = () => {
          sessionStorage.setItem("userType", null);
          sessionStorage.setItem("username", null)
          navigate("/user/signin");
  };

  return (
        <>
            {handleSubmit}
        </>
  );
}
