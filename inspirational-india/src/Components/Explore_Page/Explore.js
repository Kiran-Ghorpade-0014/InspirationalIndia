import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Paper,
} from "@mui/material";
// import { ThemeProvider } from '@emotion/react';
import Card from "../Home_Page/Card";
import { Link } from "react-router-dom";

// function preventDefault(event) {
//   event.preventDefault();
// }

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Explore() {
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
            <Grid
              container
              alignItems="flex-start"
              justifyContent="flex-start"
              sx={{
                display: "flex",
              }}
            >
              {/* Search Region */}
              <Grid item xs={12} md={4} xl={4}>
                <Paper
                  sx={{
                    p: 2,
                    bgcolor: "#0f2027",
                    height: "85vh",
                    width: "350px",
                    overflow:'scroll'
                  }}
                >
                  <Typography color="white">
                    <List>
                      <ListSubheader>Himalayan</ListSubheader>
                            <ListItem>Himalayan</ListItem>
                            <ListItem>Himalayan</ListItem>
                      <ListSubheader>NorthEastern Region</ListSubheader>
                            <ListItem>Himalayan</ListItem>
                            <ListItem>Himalayan</ListItem>
                      <ListSubheader>Gangetic Plains</ListSubheader>
                            <ListItem>Himalayan</ListItem>
                            <ListItem>Himalayan</ListItem>
                      <ListSubheader>Konkan</ListSubheader>
                            <ListItem>Himalayan</ListItem>
                            <ListItem>Himalayan</ListItem>
                      <ListSubheader>Deccan</ListSubheader>
                            <ListItem>Himalayan</ListItem>
                            <ListItem>Himalayan</ListItem>
                    </List>
                  </Typography>
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
                          <Grid key={card} item xs={12} md={3} xl={3}>
                            <item>
                              <Link to="/blog">
                              <Card
                                image="/images/jaisalmer.jpg"
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
