import { Box, Container, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Grid } from "swiper";

function About() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mb: 0 }}>
            <Paper
              sx={{
                p: 2,
                md:10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                bgcolor: "#0f2027",
              }}
            >
              <React.Fragment>
                <Typography
                  component="h1"
                  variant="h4"
                  color="White"
                  fontFamily='monospace'
                >
                  About Us
                </Typography>
                <Typography component="h1" variant="h6" color="white" fontFamily='monospace' fontSize=''>
                  <br />
                  <Typography variant="h6" color="white" fontFamily='monospace'>
                    {" "}
                    Project Overview :{" "}
                  </Typography>
                  Welcome to "Inspirational India", a cultural repository that
                  celebrates the divers and inspiring cultures of India. Our goal
                  is to bridge gaps, foster understanding, and showcase the
                  hidden treasures of India's regions and tribal areas.
                  <br />
                  <br />
                  <Typography variant="h6" color="white" fontFamily='monospace'>
                    {" "}
                    Our Vision :{" "}
                  </Typography>
                  We envision a platform that not only educates but also
                  inspires a sense of appreciation for the rich tapestry of
                  Indian cultures. Through "Inspirational India", we aim to
                  promote cultural awareness and encourage a gloabl audience to
                  explore the lesser-known aspects of this incredible country.
                  <br />
                  <br />
                  <Typography variant="h6" color="white" fontFamily='monospace'>
                    {" "}
                    Team Behind the Project :{" "}
                  </Typography>
                  1. Sumit Salunkhe ( UI Lover, Project Head, Concept Owner and Created FrontEnd React.JS) <br/>
                  2. Pritik Shinde  ( Java Master, Created Backend API using SpringBoot)
                  <br />
                  <br />
                  <Typography variant="h6" color="white" fontFamily='monospace'>
                    {" "}
                    Why "Inspirational India" ?{" "}
                  </Typography>
                  India is more than a nation; it's an Inspiration. Our platform
                  is named "Inspirational India" to convey the profound impact
                  of India's cultures on the world.
                  <br />
                  <br />
                </Typography>
              </React.Fragment>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default About;
