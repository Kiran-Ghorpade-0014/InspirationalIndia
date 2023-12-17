import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper } from "@mui/material";
import Card from "../Home_Page/Card";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Blog_Page/Footer";


export default function Recommended() {
  const [cards, setCards] = React.useState([]);

  const navigate = useNavigate();

  if (sessionStorage.getItem("userType") === "null") {
    navigate("/signin");
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
          <Typography color="white">Sign In to access this Content</Typography>
        </Container>
      </>
    );
  }

  const getCards = () => {
    fetch("http://localhost:8181/v1/blog/allBlogs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setCards(response);
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
            <Grid container spacing={4}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#0f2027",
                  }}
                >
                  <React.Fragment>
                    <Typography
                      component="h1"
                      variant="h5"
                      pd="5"
                      fontWeight="500"
                      color="White"
                      gutterBottom
                    >
                      Recommended Blogs
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
                        {getCards()}
                        {cards.slice(0,12).map((card) => (
                          <Grid item xs={12} md={3} xl={3}>
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
          <Footer color='white'/>
        </Box>
      </Box>
    </>
  );
}
