import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper } from "@mui/material";
import Card from "../Home_Page/Card";
import { Link } from "react-router-dom";

// function preventDefault(event) {
//   event.preventDefault();
// }

const cards = [1, 2, 3, 4, 5, 6,7,8];

export default function Recommended() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto"
            // height:'100vh'
          }}
        >
          <Container maxWidth="lg" sx={{ mb: 0 }}>
            <Grid
              container
              spacing={4}
            >
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:'center',
                    alignItems:'center',
                    bgcolor: "#0f2027",
                  }}
                >
                  <React.Fragment sx={{ bgcolor: "white" }}>
                    <Typography
                      component="h1"
                      variant="h5"
                      pd='5'
                      fontWeight='500'
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
                        {cards.map((card) => (
                          <Grid key={card} item xs={12} md={3} xl={3}>
                            <item>
                              <Link to="/blog">
                              <Card image="/images/jaisalmer.jpg" sx={{md:'10px'}}/>
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
