// import * as React from "react";
import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/joy/Button/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../UI_UX_Components/Footer";
import { Link } from "react-router-dom";
import Card from "../Home_Page/Card";
import Blog from "../Blog_Page/Blog";


function LandingPage() {
  const page_style = {
    color: "white",
    fontFamily: "arial",
    maxHeight: "100vh",
    maxWidth: "96vw",
  };

  const [regions, setRegions] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  const [titleIndex, setTitleIndex] = useState(0);
  const temp = { name: "Inspirational India", description: "Welcome to Cultural Repository" };
  const [region, setRegion] = useState(temp);
  const intervalTime = 5000;

  // setRegion(temp);

  React.useEffect(() => {
    fetch("http://localhost:8181/v1/region/allRegions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setRegions(response);
      })
  }, []);

  const fetchBlogs = (selectedRegion) => {
    fetch('http://localhost:8181/v1/blog/getBlogByRegion/'+selectedRegion.region_id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setCards(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // handleClick();
      setTitleIndex((prevIndex) => (prevIndex + 1) % regions.length);
      setRegion(regions[titleIndex]);
      fetchBlogs(regions[titleIndex]);

    }, intervalTime);
    return () => clearInterval(interval);
  }, [titleIndex, region, regions, cards]);


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
                }}
              >
                <div>
                  <Grid item>
                    <item>
                      {/* Title */}
                      <Typography variant="h3" sx={{ fontWeight: 900 }}>
                        {/* MALABAR */}
                        {region.name}
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
                        {region.description}
                      </Typography>
                    </item>
                  </Grid>
                  <Grid item>
                    <item>
                      {/* Button */}
                      <Button variant="solid" size="lg" color="primary">
                        <Link to="/explore">
                          <Typography
                            sx={{ textDecoration: "none", color: "white" }}
                          >
                            Explore
                          </Typography>
                        </Link>
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
                mt: "25%",
                md: "10%",
              }}
            >
              {cards.map((card) => (
                <Grid2 key={card.blog_id} item xs={12} md={6} xl={6}>
                  <Link to="">
                    <Card
                      title={card.name}
                      image = {"data:image/png;base64,"+card.image}
                      />
                  </Link>
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
