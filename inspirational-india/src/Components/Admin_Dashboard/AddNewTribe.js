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
  List,
  ListItemButton,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const regions = ["Himalaya", "Deccan", "Malabar", "NorthEast", "hello"];

export default function AddNewTribe() {
  const [tribe_name, setTribeName] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [description, setDescription] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log("form submitted...");
    event.preventDefault();
    const tribeDetails = { tribe_name, region, description};
    fetch("http://localhost:8181/v1/tribe/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tribeDetails),
    })
      .then(response => response.json())
      .then(response => {
          if(response === undefined)
            alert("Serve error \n try After some time")
          alert("New Tribe Added.")
      })
      .catch((e) => {
        alert("Cannot able to add new Tribe");
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
                      <Typography component="h1" variant="h5" color={"primary.success"}>
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
                          margin="normal"
                          className="form-control"
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          fullWidth
                          sx={{ mt: 1 }}
                        >
                          <MenuItem value="">-- Select Region --</MenuItem>
                          <MenuItem value="Open">Open</MenuItem>
                          <MenuItem value="Pending">Pending</MenuItem>
                          <MenuItem value="Completed">Completed</MenuItem>
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
