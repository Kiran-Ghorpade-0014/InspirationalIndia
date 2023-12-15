// ServerErrorPage.js
import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  // Simulate a server error
  const simulateServerError = () => {
    throw new Error('Simulated 500 Internal Server Error');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Typography variant="h1" color="error" gutterBottom>
        Error 🐞
      </Typography>
      <Typography variant="h4" color="textSecondary" align="center" gutterBottom>
        Internal Server Error 💔🪲
      </Typography>
      <Typography variant="h6" color="textSecondary" align="justify" gutterBottom>
       Fellow Developers - Follow these Steps: <br/>
	   1. Check Connection To Server <br/>
	   2. Check Error in Browser Console <br/>
	   3. Blame Pratik <br/>
	   4. Blame Sumit <br/>
	   5. Say Sorry to Sir <br/>

		<Link to='/' >
			<Typography variant='h6' color='whitesmoke' align='justify'>
			6. Try Again...
			</Typography>
		</Link>
      </Typography>
    </Container>
  );
};

export default ErrorPage;
