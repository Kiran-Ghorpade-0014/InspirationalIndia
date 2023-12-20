import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  Paper,
  selectClasses,
} from "@mui/material";
import Card from "../Home_Page/Card";
import { Link } from "react-router-dom";
import { ListDivider } from "@mui/joy";

export default function Explore() {
  const [regions, setRegions] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [selectedRegion, setSelectedRegion] = React.useState([]);

  React.useEffect(() => {
    fetch("http://"+window.location.host.split(':')[0]+":8181/v1/region/allRegions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setRegions(response);
        // selectedRegion===null?(regions?setSelectedRegion(regions[0]):setSelectedRegion(null)):setRegions(null);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (region) => {
    setSelectedRegion(region);
    fetch("http://"+window.location.host.split(':')[0]+":8181/v1/blog/getBlogByRegion/" + region.region_id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setCards(response);
        // console.log(cards);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            // height:'100vh'
          }}
        >
          <Container maxWidth="lg" sx={{ mb: 0 }}>
            <Grid container alignItems="flex-start" justifyContent="flex-start">
              {/* Search Region */}
              <Grid item xs={12} md={4} xl={4}>
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: "#0f2027",
                    height: "85vh",
                    width: "350px",
                    overflow: "scroll",
                    mb:'10px',
                    mt:{xs:5, lg:0}
                  }}
                >
                  <Typography color='white' variant="h6" align="center">Regions </Typography>
                  <hr/>
                  <List>
                    {regions.map((region) => (
                      <>
                        <ListItemButton
                          onClick={() => handleClick(region)}
                          key={region.region_id}
                        >
                          <Link to="#">
                            <Typography sx={{ color: "white" }}>
                              {region.name}
                            </Typography>
                          </Link>
                        </ListItemButton>
                        <ListDivider sx={{ bgcolor: "white" }} />
                      </>
                    ))}
                  </List>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} xl={8}>
                <Grid Container>
                  <Grid item>
                    <Paper
                      sx={{
                        p: {lg:5,xs:2},
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "start",
                        bgcolor: "#0f2027",
                        width: {lg:"60vw",mx:'60vw',xs:'90vw'},
                        height: {lg:"25vh",xs:'40vh'},
                        overflow: "scroll",
                        mb: 1,
                      }}
                    >
                      <Container maxWidth="lg" sx={{ mb: 0 }}>
                        <Paper
                          sx={{
                            p: 2,
                            md: 10,
                            ml:{xs:0},
                            bgcolor: "white",
                            color: "#0f2027",
                            width: {lg:"52vw",mx:'52vw',xs:'75vw'},
                          }}
                        >
                          <React.Fragment>
                            <Typography
                              component="h1"
                              variant="h5"
                              fontFamily="monospace"
                            >
                              About :
                            </Typography>
                            <Typography
                              component="h1"
                              variant="h6"
                              color="#0f2027"
                              fontSize=""
                            >
                              {selectedRegion ? selectedRegion.description : ""}
                              <br />
                            </Typography>
                          </React.Fragment>
                        </Paper>
                      </Container>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        bgcolor: "#0f2027",
                        width: {lg:"60vw",mx:'60vw',xs:'90vw'},
                        height: "60vh",
                        overflow: "scroll",
                      }}
                    >
                        <Typography
                          component="h1"
                          variant="h5"
                          pd="5"
                          fontWeight="500"
                          color="White"
                          gutterBottom
                        >
                          Blogs
                        </Typography>
                        <hr/>
                        <Grid />
                        <Grid item xs={12}>
                          <Grid
                            container
                            rowSpacing={1}
                            spacing={5}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                          >
                            {cards.map((card) => (
                              <Grid item xs={12} md={4} xl={4}>
                                <item key={card.blog_id}>
                                  <Link to={`/blog/${card.blog_id}`}>
                                    <Card
                                      title={card.name}
                                      image={
                                        "data:image/jpg;base64," + card.image
                                      }
                                      sx={{ md: "10px" }}
                                    />
                                  </Link>
                                </item>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          {/* <Footer color='white'/> */}
        </Box>
      </Box>
    </>
  );
}
