// import * as React from "react";
import React, { useState, useEffect } from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import Button from "@mui/joy/Button/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../UI_UX_Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import MuiCard from "@mui/material/Card";
import Card from "../Home_Page/Card";

function LandingPage() {
  const page_style = {
    color: "white",
    fontFamily: "arial",
    maxHeight: "100vh",
    maxWidth: "96vw",
  };

  const [regions, setRegions] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [isFirst, setIsFirst] = useState(true);

  const [titleIndex, setTitleIndex] = useState(0);
  const temp = {
    blog_id: -2,
    name: "Inspirational India",
    description: "Welcome to Cultural Repository",
    image: "../../../incredible-india.jpg",
  };
  const [region, setRegion] = useState(temp);
  const intervalTime = 3000;
  const navigate = useNavigate();
  // const totalCards = 8;

  // setRegion(temp);

  React.useEffect(() => {
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/region/allRegions",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setRegions(response);
      })
      .catch(() => navigate("/ErrorPage"));
  }, [navigate]);

  const fetchBlogs = (selectedRegion) => {
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/blog/getBlogByRegion/" +
        selectedRegion.region_id,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setCards(response);
      })
      .catch(() => navigate("/ErrorPage"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // handleClick();
      setTitleIndex((prevIndex) => (prevIndex + 1) % regions.length);
      setRegion(regions[titleIndex]);
      fetchBlogs(regions[titleIndex]);
      setIsFirst(false);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [titleIndex, regions]);

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
                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        textAlign: { lg: "justify", xs: "center" },
                      }}
                    >
                      {/* MALABAR */}
                      {region.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {/* Description */}
                    <Typography
                      sx={{
                        height: "20vh",
                        width: { lg: "40vw", mx: "90vw", xs: "90vw" },
                        textAlign: { lg: "justify", xs: "center" },
                        fontWeight: "150",
                        mb: { xs: "10px" },
                      }}
                    >
                      {region.description}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", lg: "start" },
                    }}
                  >
                    <Button variant="solid" size="lg" color="primary">
                      <Link to="/explore">
                        <Typography
                          sx={{ textDecoration: "none", color: "white" }}
                        >
                          Explore
                        </Typography>
                      </Link>
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </item>
          </Grid2>

          <Grid2 item xs={12} md={6} xl={6}>
            {/* Cards */}

            {isFirst ? (
              <Grid2
                container
                rowSpacing={1}
                spacing={8}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  mt: "5%",
                  md: "10%",
                }}
              >
                <img
                  component="img"
                  height="500"
                  width="460"
                  src="../../../incredible-india.png"
                  alt="Inspirational India"
                  sx={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    background: "cover",
                  }}
                />
              </Grid2>
            ) : (
              <>
                <Grid2
                  container
                  rowSpacing={1}
                  spacing={8}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    mt: "15%",
                    md: "10%",
                  }}
                >
                  {cards.slice(0, 6).map((card) => (
                    <Grid2 key={card.blog_id} item xs={12} md={4} xl={4}>
                      <Link to={`/blog/${card.blog_id}`}>
                        {console.log(card.blog_id)}
                        <Card
                          title=""
                          image={"data:image/png;base64," + card.image}
                        />
                      </Link>
                    </Grid2>
                  ))}
                </Grid2>
              </>
            )}
          </Grid2>
          <Footer color="white" />
        </Grid2>
      </div>
    </>
  );
}

export default LandingPage;
