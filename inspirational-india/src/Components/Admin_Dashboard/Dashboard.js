import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Avatar, Button, Typography } from '@mui/material';
import { DashboardOutlined } from '@mui/icons-material';
// import Deposits from './Deposits';
// import Orders from './Orders';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {

  return (
    <ThemeProvider theme={defaultTheme} >
    <Container component="main" maxWidth="xs" sx={{backgroundColor:'#ffffff'}}>
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <DashboardOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5" color={'primary.success'}>
         Dashboard
        </Typography>
        <Box  noValidate sx={{ mt: 1 }}>
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
            sx={{ mt: 3, mb:5}}
            href="/manage/tribe"
          >
            Manage Tribes
          </Button>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 5 }}
            href="/manage/user"
          >
            Manage Users
          </Button> */}
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  );
}
