import { Alert, Typography } from "@mui/material";
import React from "react";

export default function CustomAlert(props) {

  const timeout = 3000;

  function hideMessage() {
    setTimeout(() => {
      props.setAlertOpen();
    }, timeout);
  }

  return (
    <>
        {hideMessage()}
      { 
      props.alertOpen?(
        <Alert variant="outlined" severity={props.type}>
          {props.message}                
          </Alert>
        ):(<></>)
      }
    </>
  );
}

// type : error, warning , info , success
// title: any
// description : any
