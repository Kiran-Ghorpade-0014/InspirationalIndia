// ServerErrorPage.js
import React from "react";
import {  Container, Typography } from "@mui/material";
import Orders from "./Orders";

const Reports = () => {

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        mt: 6,
        backgroundColor: "white",
      }}
    >
      <Typography component="h1" variant="h5" color={"primary.success"}>
        Report
      </Typography>
      <Container sx={{ mt:5}}>
      <Orders />
      </Container>
    </Container>
  );
};

export default Reports;
