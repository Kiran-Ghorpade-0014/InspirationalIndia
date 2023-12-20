// ServerErrorPage.js
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import BlogReport from "../Reports/BlogReport";
import RegionReport from "../Reports/RegionReport";
import TribeReport from "../Reports/TribeReport";
import UserReport from "../Reports/UserReport";

const handlePrintClick = () => {
  window.print();
};

function reportType(type) {
  switch (type) {
    case "blogReport":
      return <BlogReport />;
    case "regionReport":
      return <RegionReport />;
    case "tribeReport":
      return <TribeReport />;
    case "userReport":
      return <UserReport />;
    default:
      return <Typography> No Records Found </Typography>;
  }
}

const Reports = (props) => {
  const { type } = useParams();

  if (!props.isLogin) {
    return (
      <>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Typography sx={{ textDecoration: "none", color: "white" }}>
            <Link to="/signin">Sign In</Link> to access this Content
          </Typography>
        </Container>
      </>
    );
  }

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
      <Button variant="outlined" onClick={handlePrintClick}>
        Print
      </Button>
      <Container
        sx={{ mt: 5, overflow: "scroll", displayPrint: "block" }}
        id="report"
      >
        {reportType(type)}
      </Container>
    </Container>
  );
};

export default Reports;
