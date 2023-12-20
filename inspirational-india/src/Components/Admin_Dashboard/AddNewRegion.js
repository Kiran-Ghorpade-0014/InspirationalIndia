import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../UI_UX_Components/Footer";
import { NewReleasesOutlined } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import ListItems from "./ListItems";
import { Link } from "react-router-dom";
// import { Option } from "@mui/joy";
// import { Link } from "react-router-dom";
// import { ListDivider } from "@mui/joy";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddNewRegion(props) {
  const [name, setRegionName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.isLogin) {
      const regionDetails = { name, description };
      fetch(
        "http://" + window.location.host.split(":")[0] + ":8181/v1/region/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(regionDetails),
        }
      )
        // .then(response => response.json())
        .then((response) => {
          if (response.status === 401)
            alert("Serve error \n try After some time");
          alert("New Region Added.");
        })
        .catch((e) => {
          alert("New Blog Added.");
          console.log(e);
        });
    } else {
      alert("sign in to add blog");
    }
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
                      <Typography
                        component="h1"
                        variant="h5"
                        color={"primary.success"}
                      >
                        Add New Region
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
                          id="region_name"
                          label="Region Name"
                          name="text"
                          autoFocus
                          onChange={(e) => setRegionName(e.target.value)}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="description"
                          label="Description"
                          id="description"
                          multiline
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Add
                        </Button>
                        <Button fullWidth variant="contained" sx={{ mb: 2 }}>
                          <Link to="/dashboard" style={{ color: "white" }}>
                            Cancel
                          </Link>
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </Grid>
              </React.Fragment>
            </Grid>
            {/* Search Region */}
            <ListItems
              fetchUrl={
                "http://" +
                window.location.host.split(":")[0] +
                ":8181/v1/region/allRegions"
              }
              TitleName="Region"
            />
          </Grid>
          {/* </Container> */}
          {/* <Footer color='white'/> */}
        </Box>
      </Box>
      <Footer color="white" />
    </ThemeProvider>
  );
}
