import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../UI_UX_Components/Footer";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/user/authentication",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response === undefined) alert("error","Login Failed");
        sessionStorage.setItem("userType", "USER");
        alert("success","Login Successfull.");
        props.updateFlag();
        sessionStorage.setItem("userDetails", JSON.stringify(response));
        sessionStorage.setItem("username", response.username.toString());
        sessionStorage.setItem("userid", response.user_Id.toString());
        navigate("/");
      })
      .catch((e) => {
        alert("error","Login Failed.");
        console.log(e);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary.success">
            Sign in
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
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button fullWidth variant="contained" sx={{ mb: 2 }}>
              <Link to="/admin/signin" style={{ color: "white" }}>
                Admin Login
              </Link>
            </Button>
            <Grid container sx={{ mb: 4 }}>
              <Grid item>
                <Link
                  to="/registration"
                  variant="body1"
                  style={{ color: "Blue" }}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer color="white" />
    </ThemeProvider>
  );
}
