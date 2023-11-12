import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../UI_UX_Components/Footer";
import { NewReleasesOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  Paper,
} from "@mui/material";
// import { Link } from "react-router-dom";
// import { ListDivider } from "@mui/joy";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const regions = ["Himalaya", "Deccan", "Malabar", "NorthEast", "hello"];

export default function AddNewRegion() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            // height:'100vh'
          }}
        >
          {/* <Container maxWidth="lg" sx={{ mb: 0 }}> */}
          <Grid
            container
            alignItems="flex-start"
            justifyContent="flex-start"
            sx={{
              display: "flex",
            }}
          >
            {/* blogs*/}
            <Grid item xs={12} md={6} xl={6}>
              <React.Fragment>
                <Grid item xs={12}>
                  <Container
                    // component="main"
                    maxWidth="xs"
                    sx={{ backgroundColor: "#ffffff" }}
                  >
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <NewReleasesOutlined />
                      </Avatar>
                      <Typography component="h1" variant="h5" color={"success"}>
                        Add New Tribe
                      </Typography>
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="tribe_name"
                          label="Tribe Name"
                          name="text"
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="select_region"
                          label="Select Region "
                          name="SelectRegion"
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="description"
                          label="Description"
                          id="description"
                          multiline
                        />
                        <Button
                          type="Register"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          href="#"
                        >
                          Add
                        </Button>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mb: 2 }}
                          href="/"
                        >
                          Cancel
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </Grid>
              </React.Fragment>
            </Grid>
            {/* Search Region */}
            <Grid
              item
              xs={12}
              md={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: "5" },
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  bgcolor: "#0f2027",
                  height: "65vh",
                  width: "350px",
                  overflow: "scroll",
                  mt: 8,
                }}
              >
                <List>
                  {regions.map((region) => (
                    <>
                      <ListItemButton>
                        <Typography sx={{ color: "white" }}>
                          {region}
                        </Typography>
                      </ListItemButton>
                      {/* <ListDivider sx={{ bgcolor: "white" }} /> */}
                    </>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
          {/* </Container> */}
          {/* <Footer color='white'/> */}
        </Box>
      </Box>
      <Footer color="white" />
    </ThemeProvider>
  );
}
