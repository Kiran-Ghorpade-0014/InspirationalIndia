import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Accordion,
  AccordionSummary,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import { DashboardOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard(props) {
  const navigate = useNavigate();
  if (!props.isLogin) {
    navigate("/admin/signin");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ backgroundColor: "#ffffff" }}
      >
        {/* <CssBaseline /> */}
        {sessionStorage.setItem("userType", "ADMIN")}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <DashboardOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" color={"primary.success"}>
            Dashboard
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              <Link to="/manage/blog" style={{ color: "white" }}>
                Manage Blogs
              </Link>
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              <Link to="/manage/Region" style={{ color: "white" }}>
                Manage Regions
              </Link>
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              <Link to="/manage/tribe" style={{ color: "white" }}>
                Manage Tribes
              </Link>
            </Button>
            <Accordion sx={{ mt: 2, mb: 5 }}>
              <AccordionSummary>
                <Button type="submit" fullWidth variant="contained">
                  Reports 🔻
                </Button>
              </AccordionSummary>
              <Box sx={{ mt: 2, mb: 2, pl: 3, pr: 3 }}>
                <Button fullWidth variant="contained">
                  <Link
                    to="/manage/reports/regionReport"
                    style={{ color: "white" }}
                  >
                    Region Report
                  </Link>
                </Button>
                <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                  <Link
                    to="/manage/reports/tribeReport"
                    style={{ color: "white" }}
                  >
                    Tribe Report
                  </Link>
                </Button>
                <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                  <Link
                    to="/manage/reports/blogReport"
                    style={{ color: "white" }}
                  >
                    Blog Report
                  </Link>
                </Button>
                <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                  <Link
                    to="/manage/reports/userReport"
                    style={{ color: "white" }}
                  >
                    Users Report
                  </Link>
                </Button>
              </Box>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
