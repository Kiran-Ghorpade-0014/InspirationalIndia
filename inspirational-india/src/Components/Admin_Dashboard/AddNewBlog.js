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
  Select,
  MenuItem,
} from "@mui/material";
import ListItems from "./ListItems";
import { Link } from "react-router-dom";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AddNewBlog(props) {
  const [Regions, setRegions] = React.useState([]);
  const [Tribes, setTribes] = React.useState([]);
  const [region, setRegion] = React.useState("");
  const [tribe, setTribe] = React.useState("");
  const [name, setBlogTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/region/allRegions",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setRegions(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const fetchTribe = (event) => {
    setRegion(event.target.value);
    let selectedRegion = event.target.value;
    let region_id = selectedRegion.region_id ? selectedRegion.region_id : 0;
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/tribe/getTribeByRegion/" +
        region_id,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setTribes(response);
      })
      .catch((err) => console.error(err));
  };

  const handleImageChange = (event) => {
    // Handle image selection
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.isLogin) {
      if (name === "" || region === "" || tribe === "" || description === "") {
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("region", region.region_id);
      formData.append("tribe", tribe.tribe_id);
      formData.append("description", description);
      formData.append("image", image); // Append the image to the form data

      fetch(
        "http://" + window.location.host.split(":")[0] + ":8181/v1/blog/add",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((response) => {
          if (response === undefined)
            alert("Serve error \n try After some time");
          alert("New Blog Added.");
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
          }}
        >
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
                      <Typography
                        component="h1"
                        variant="h5"
                        color={"primary.success"}
                      >
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
                          onChange={(e) => setBlogTitle(e.target.value)}
                        />
                        <Select
                          className="form-control"
                          value={region}
                          onChange={fetchTribe}
                          fullWidth
                          sx={{ mt: 1 }}
                          required
                        >
                          <MenuItem value="">-- Select Region --</MenuItem>
                          {Regions.map((region) => (
                            <MenuItem value={region}>{region.name}</MenuItem>
                          ))}
                        </Select>
                        <Select
                          className="form-control"
                          value={tribe}
                          onChange={(e) => setTribe(e.target.value)}
                          fullWidth
                          sx={{ mt: 1 }}
                          required
                        >
                          <MenuItem value="">-- Select Tribe --</MenuItem>
                          {Tribes.map((tribe) => (
                            <MenuItem value={tribe}>{tribe.name}</MenuItem>
                          ))}
                        </Select>
                        {/* <input type="file"> Upload Image </input> */}
                        <input
                          type="file"
                          label=" Upload Image"
                          id="fileInput"
                          onChange={handleImageChange}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="description"
                          label="Blog Text"
                          id="description"
                          multiline
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 1, mb: 2 }}
                        >
                          Publish
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{ mb: 2 }}
                        >
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
                ":8181/v1/blog/allBlogs"
              }
              TitleName="Blog"
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
