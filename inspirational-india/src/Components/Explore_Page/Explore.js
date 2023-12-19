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
    fetch("http://localhost:8181/v1/region/allRegions", {
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
    fetch(
      "http://localhost:8181/v1/blog/getBlogByRegion/" +
        region.region_id,
      {
        method: "GET",
      }
    )
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
                  }}
                >
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

              {/* blogs*/}
              <Grid item xs={12} md={8} xl={8}>
                <Paper
                  sx={{
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#0f2027",
                    width: "60vw",
                    height: "85vh",
                    overflow: "scroll",
                  }}
                >
                  <Container maxWidth="lg" sx={{ mb: 0 }}>
                    <Paper
                      sx={{
                        p: 2,
                        md: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",
                        bgcolor: "white",
                        color: "#0f2027",
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
                  <React.Fragment>
                    <Typography
                      component="h1"
                      variant="h5"
                      pd="5"
                      fontWeight="500"
                      color="White"
                      gutterBottom
                    >
                      <br/>
                      Blogs
                    </Typography>
                    <Grid />
                    <Grid item xs={12}>
                      <Grid
                        container
                        rowSpacing={1}
                        spacing={2}
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
                                  image={"data:image/jpg;base64," + card.image}
                                  sx={{ md: "10px" }}
                                />
                              </Link>
                            </item>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </React.Fragment>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          {/* <Footer color='white'/> */}
        </Box>
      </Box>
    </>
  );
}
