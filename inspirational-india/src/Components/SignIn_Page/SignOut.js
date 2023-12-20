import * as React from "react";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignOut(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
          sessionStorage.setItem("userType", null);
          sessionStorage.setItem("username", null);
          sessionStorage.setItem("userDetails", null);
          sessionStorage.setItem("userid", null);
          props.updateFlag();
          navigate("/signin");
  });

  return (
        <>
        </>
  );
}
