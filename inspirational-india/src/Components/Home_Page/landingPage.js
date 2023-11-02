// import * as React from "react";
import { useState,useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/joy/Button/Button";
import Card from "./Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../UI_UX_Components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  const page_style = {
    color: "white",
    fontFamily: "arial",
    maxHeight: "100vh",
    maxWidth: "96vw"
  };

  const content_style = {
    // width: "50%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // textAlign: "justify",
  };

  const Titles = [
    "MALABAR",
    "NORTH EAST",
    "WESTERN GHATS",
    "THAR",
    "DECCAN PLATEU",
  ];

  const description=[
    "Malabar is a region located in the Western Ghats, renowned for its lush green landscape and serene beauty.",
    "North East is home to numerous indigenous tribes, each with its own unique colorful festivals.",
    "The region is blessed by the presence of the majestic River Ganga, which meanders through this land, bringing life and fertility to the area.",
    "The region is blessed by the presence of the majestic River Ganga, which meanders through this land, bringing life and fertility to the area.",
    "The region is blessed by the presence of the majestic River Ganga, which meanders through this land, bringing life and fertility to the area.",

  ];

  const cardImages=[
    "/images/snow-leoperd.jpg",
    "/images/north_east_india.jpg",
    "/images/mh.jpg",
    "/images/vanela.jpg",
    "/images/jaisalmer.jpg"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const intervalTime = 5000;
  useEffect(()=>{
    const interval = setInterval(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % Titles.length);
    }, intervalTime);
    return ()=> clearInterval(interval);
  });


  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div style={page_style}>
        {/* <div> */}
        <Grid2
          container
          justifyContent="space-evenly"
          alignItems="flex-start"
          maxHeight="70vh"
        >
          <Grid2 item xs={12} md={6} xl={6}>
            <item>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  mt: "25%",
                  // margin:'50% auto',
                  // marginLeft:'15%'
                }}
              >
                <div style={content_style}>
                  <Grid item>
                    <item>
                      {/* Title */}
                      <Typography variant="h3" sx={{ fontWeight: 900 }}>
                        {/* MALABAR */}
                        {Titles[titleIndex]}
                      </Typography>
                    </item>
                  </Grid>
                  <Grid item>
                    <item>
                      {/* Description */}
                      <Typography
                        sx={{
                          height: "20vh",
                          width: "40vw",
                          textAlign: "justify",
                          fontWeight: "150",
                        }}
                      >
                        {description[titleIndex]}
                      </Typography>
                    </item>
                  </Grid>
                  <Grid item>
                    <item>
                      {/* Button */}
                      <Button variant="solid" size="lg" color="primary" sx={{ textDecoration: "none", color: "black", mt:3 }}>
                      <Link to="/blog" >Explore</Link>
                      </Button>
                    </item>
                  </Grid>
                </div>
              </Grid>
            </item>
          </Grid2>

          <Grid2 item xs={12} md={6} xl={6}>
            {/* Cards */}
            <Grid2
              container
              rowSpacing={1}
              spacing={8}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: "3%",
                md: "0%",
                // maxWidth:'50vw',
                // maxHeight:'90vh'
              }}
            >
              {cards.map((card) => (
                <Grid2 key={card} item xs={12} md={6} xl={6}>
                  <item>
                    <Link to="/blog">
                    <Card image={cardImages[titleIndex]} />
                    </Link>
                  </item>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Footer color="white" />
        </Grid2>
      </div>
    </>
  );
}

export default LandingPage;
