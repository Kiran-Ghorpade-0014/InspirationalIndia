import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminSignIn(props) {
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (password === "") {
      return;
    }
    event.preventDefault();
    fetch(
      "http://" +
        window.location.host.split(":")[0] +
        ":8181/v1/user/admin/authentication",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: password.toString(),
      }
    )
      // .then(response => response.json())
      .then((response) => {
        if (response.status !== 200) alert("error", "Login Failed.");
        else {
          sessionStorage.setItem("userType", "ADMIN");
          alert("success", "Login Successfull.");
          props.updateFlag();
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        alert("error", "Login Failed.");
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
        {/* <CssBaseline /> */}
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
          <Typography component="h1" variant="h5" color={"success"}>
            Admin Sign in
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
              name="password"
              label="Password"
              type="password"
              id="password"
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
            <Button
              type="contained"
              fullWidth
              variant="contained"
              sx={{ mb: 8 }}
            >
              <Link to="/signin" style={{ color: "white" }}>
                User Login
              </Link>
            </Button>
            {/* <Grid container>
              <Grid item>
                <Link to="#" variant="body1">
                  {"Forgot Password ?"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
