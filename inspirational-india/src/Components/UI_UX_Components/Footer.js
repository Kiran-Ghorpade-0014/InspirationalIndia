import * as React from "react";
// import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
// import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <Box component="footer" sx={{ bgcolor: "background.transperent", mb: 0 }}>
      <Typography
        variant="body2"
        color={props.color}
        align="center"
        sx={{ pt: 5 }}
      >
        {"Copyright © "}
        <Link color="inherit" to="/" style={{color:'white'}}>
          Inspirational India
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Footer;
