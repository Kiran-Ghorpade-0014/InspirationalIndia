import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/joy/Button/Button";
import Card from "./Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../UI_UX_Components/Footer";

function landingPage() {
  const page_style = {
    color: "white",
    fontFamily: "arial",
    maxHeight: "100vh",
    maxWidth: "100vw",
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
    "WESTERN GHATS",
    "RIVER GANGA",
    "THAR",
    "DECCAN PLATEU",
  ];
  //   const description = ['WARNING in [eslint]src\Components\landingPage.js Line 20:11:' ,'Titles is assigned a value but never used'];

  const Title = () => {
    setInterval(() => {
      Titles.map((page) =>
        console.log(page)
    //    <Typography>{page}</Typography>
    );
}, 2000);
  };

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
                        MALABAR
                        {Title}
                      </Typography>
                    </item>
                  </Grid>
                  <Grid item>
                    <item>
                      {/* Description */}
                      <Typography
                        sx={{
                          height: "20vh",
                          width: "30vw",
                          textAlign: "justify",
                          fontWeight: "150",
                        }}
                      >
                        jaksjroewjakfjskalfj iewojfklsdjifeoisjafkldsjafioejakf
                        ;djsklfjlkasdjfijeijskfjkasdjkhgls
                        jrieojfkdjfksjdakjteijfksdjfieijawflidsjkfl
                      </Typography>
                    </item>
                  </Grid>
                  <Grid item>
                    <item>
                      {/* Button */}
                      <Button variant="solid" size="lg" color="primary" sx={{}}>
                        Explore
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
                    <Card image="/images/snow-leoperd.jpg" />
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

export default landingPage;
