import * as React from "react";
// import { useTheme } from '@mui/material/styles';
import { ResponsiveContainer } from "recharts";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { Select } from "@mui/material";
import { FormControl, MenuItem } from "@mui/joy";
// import { FileUpload, UploadFile } from '@mui/icons-material';

// Generate Sales Data
// function createData(time) {
//   return time;
// }

export default function BlogCreator() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl>
            <Typography component="h1" variant="h4" color={"success"}>
              Create New Blog
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 0 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="blogTitle"
                label="BlogTitle"
                name="text"
                autoFocus
              />
              <Select
                margin="normal"
                sx={{
                  mt: 2
                }}
                required
                fullWidth
                name="region"
                label="region"
                type="text"
                id="region"
                native="false"
                // value=""
              >
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
                <MenuItem>hello</MenuItem>
              </Select>
              <Select
                margin="normal"
                sx={{
                  mt: 2,
                }}
                required
                fullWidth
                name="tribe"
                label="tribe"
                type="tribe"
                id="tribe"
              ></Select>
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                type="description"
                id="description"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2, mt: 3 }}
                href="#"
              >
                <Typography>Publish</Typography>
              </Button>
            </Box>
          </FormControl>
        </Box>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
