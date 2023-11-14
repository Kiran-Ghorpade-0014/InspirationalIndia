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
  Select,
  MenuItem,
} from "@mui/material";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const regions = ["Himalaya", "Deccan", "Malabar", "NorthEast", "hello"];

export default function AddNewBlog() {

  const [region, setRegion] = React.useState("");
  const [tribe, setTribe] = React.useState("");


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
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        {/* <LockOutlinedIcon /> */}
                        <NewReleasesOutlined />
                      </Avatar>
                      <Typography component="h1" variant="h5" color={"success"}>
                        Publish New Blog
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
                          id="blog_title"
                          label="Blog Title"
                          name="text"
                          autoFocus
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
                        <Select
                          margin="normal"
                          className="form-control"
                          value={tribe}
                          onChange={(e) => setTribe(e.target.value)}
                          fullWidth
                          sx={{ mt: 1}}
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
                          label="Blog Text"
                          id="description"
                          multiline
                        />
                        <Button
                          type="Register"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 1, mb: 2 }}
                          href="#"
                        >
                          Publish
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
                  height: "75vh",
                  width: "450px",
                  overflow: "scroll",
                  mt: 3,
                }}
              >
                <Typography component="h1" variant="h5" color="white">
                  Blog List :
                  <hr />
                </Typography>
                <List>
                  {regions.map((region) => (
                    <>
                      <ListItemButton>
                        <Typography sx={{ color: "white" }}>
                          {regions.indexOf(region) + 1 + ". " + region}
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
