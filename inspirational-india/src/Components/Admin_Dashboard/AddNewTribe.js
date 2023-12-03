import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../UI_UX_Components/Footer";
import { NewReleasesOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import ListItems from "../Admin_Dashboard/ListItems";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddNewTribe() {
  sessionStorage.setItem("userType", "ADMIN");

  const [Regions, setRegions] = React.useState([]);
  // const [Tribes, setTribes] = React.useState([]);
  const [name, setTribeName] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:8181/v1/region/allRegions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setRegions(response);
      })
      .catch((err) => console.error(err));
  }, []);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name === '' || region === '' || description === ''){
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("region", region.region_id);
    formData.append("description", description);

    fetch("http://localhost:8181/v1/tribe/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response === undefined) alert("Serve error \n try After some time");
        alert("New Blog Added.");
      })
      .catch((e) => {
        alert("Cannot able to add new Blog");
        console.log(e);
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
            justifyContent="flex-end"
            sx={{
              display: "flex",
            }}
          >
            {/* blogs*/}
            <Grid item xs={12} md={6} xl={6}>
              <React.Fragment>
                <Grid item xs={12}>
                  <Container
                    component="main"
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
                        {/* <LockOutlinedIcon /> */}
                        <NewReleasesOutlined />
                      </Avatar>
                      <Typography
                        component="h1"
                        variant="h5"
                        color={"primary.success"}
                      >
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
                          onChange={(e) => setTribeName(e.target.value)}
                        />
                        <Select
                          className="form-control"
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          fullWidth
                          sx={{ mt: 1 }}
                          required
                        >
                          <MenuItem value="">-- Select Region --</MenuItem>
                          {Regions.map((region) => (
                            <MenuItem value={region}>{region.name}</MenuItem>
                          ))}
                        </Select>
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
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ mb: 2 }}
                          href="/dashboard"
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
            <ListItems
              fetchUrl="http://localhost:8181/v1/tribe/allTribes"
              TitleName="Tribe"
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
