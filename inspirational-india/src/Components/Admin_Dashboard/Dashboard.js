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
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const navigate = useNavigate();
  if (sessionStorage.getItem("userType") !== "ADMIN") {
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              href="/manage/blog"
            >
              Manage Blogs
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              href="/manage/region"
            >
              Manage Regions
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              href="/manage/tribe"
            >
              Manage Tribes
            </Button>
            <Accordion sx={{ mt: 2, mb: 5 }}>
              <AccordionSummary>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // href="/manage/reports"
                >
                  Reports 🔻
                </Button>
              </AccordionSummary>
              <Box sx={{ mt: 2, mb: 2, pl: 3, pr: 3 }}>
                <Button fullWidth variant="contained" href="/manage/reports/regionReport">
                  Region Report
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  href="/manage/reports/tribeReport"
                >
                  Tribe Report
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  href="/manage/reports/blogReport"
                >
                  Blog Report
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  href="/manage/reports/userReport"
                >
                  Users Report
                </Button>
              </Box>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
