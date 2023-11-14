import * as React from "react";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignOut() {
  const navigate = useNavigate();

  React.useEffect(() => {
          sessionStorage.setItem("userType", null);
          sessionStorage.setItem("username", null);
          navigate("/signin");
  });

  return (
        <>
        </>
  );
}
