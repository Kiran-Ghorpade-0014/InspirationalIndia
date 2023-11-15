import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/MenuRounded";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Explore", "About", "Recommended"];
let settings = ["SignOut"];
const choice = ["SignIn"];
let isLogin = false;

export default function MyAppBar() {
  let username = "";

  function updateUsername() {
    if (sessionStorage.getItem("userType") === "USER") {
      isLogin = true;
      username = sessionStorage.getItem("username");
      // setUsername(sessionStorage.getItem("username"));
    } else if (sessionStorage.getItem("userType") === "ADMIN") {
      isLogin = true;
      username = "ADMIN";
      settings= ["Dashboard","SignOut"]
    } else {
      isLogin = false;
    }
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 0 }} color="transparent">
      {updateUsername()}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h5"
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 750,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            Inspirational India
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 4,
                  fontWeight: 100,
                  color: "white",
                  display: "block",
                }}
              >
                <Link to={"" + page}>
                  <Typography sx={{ textDecoration: "none", color: "white" }}>
                    {page}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          {/* Profile Icon */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", xl: "flex", md: "flex" },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 3 }}>
                <Avatar alt="Remy Sharp" src="#" />
                <Typography color="white" variant="h6" sx={{ ml: 2 }}>
                  {isLogin === true ? "Hello," + { username } + "!" : "Sign In"}
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(isLogin === true ? settings : choice).map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {/* <Typography textAlign="center">{setting}</Typography> */}
                  <Link to={"user/" + setting}>
                    <Typography sx={{ textDecoration: "none", color: "black" }}>
                      {setting}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ----------------------------------------------------------------------------------------------------- */}
          {/* MinWidth Navigation Buttons */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={"" + page}>
                    <Typography sx={{ textDecoration: "none", color: "black" }}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* minWidth Navigation Buttons */}
          <Typography
            variant="h5"
            Wrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexShrink: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Inspirational India
          </Typography>

          {/* MinWidth Profile Icon */}
          <Box sx={{ flexShrink: 2, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 4 }}>
                <Avatar alt="Remy Sharp" src="#" sizes="small" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(isLogin === true ? settings : choice).map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {/* <Typography textAlign="center">{setting}</Typography> */}
                  <Link to={"" + setting}>
                    <Typography sx={{ textDecoration: "none", color: "black" }}>
                      {setting}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
