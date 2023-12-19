import * as React from "react";
import {  Box, Paper, Typography } from "@mui/material";

export default function MessageBox(props) {
  //assignment
  const [ListObject, setListObject] = React.useState([]);
  // let isLogin = false;

  React.useEffect(() => {
    // console.log(props.fetchUrl)
    fetch(`http://localhost:8181/v1/comment/${props.blogId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setListObject(response.reverse());
        // ListObject=response;
      })
      .catch((err) => console.error(err));
  }, []);


  
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2, display:'flex', flexDirection:'column-reverse'}} >
      {ListObject?ListObject.map((obj) => (
        <>
          <Message message={obj} />
        </>
      )):(
          <>
            <Typography color='black' sx={{justifyContent:'center'}}>No Comments Found</Typography>
          </>
      )
      }
    </Box>
  );
}

function Message({ message }) {
  // console.log("Im in message " + message);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mb: 2,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 1,
          backgroundColor: "#c8d5df",
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "20px",
            color:'#00162b'
          }}
        >
           {message.user_id ? message.user_id.username : "Unknown"}:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            fontWeight: "20px",
            color:'red'
          }}
        >
          {message.comment_text}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "10px",
            fontWeight: "20px",
            // font
          }}
        >
          {new Date(message.comment_datetime).toString()}
        </Typography>
      </Paper>
    </Box>
  );
}
