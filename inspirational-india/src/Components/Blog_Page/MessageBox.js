import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function MessageBox() {
  //assignment
  const [messages, setMessages] = React.useState([]);
  let isLogin = false;

  //check login setup
  if (sessionStorage.getItem("userType") === "USER") {
    isLogin = true;
  } else if (sessionStorage.getItem("userType") === "ADMIN") {
    isLogin = true;
  } else {
    isLogin = false;
  }

  //useEffect
  React.useEffect(() => {
    if (!isLogin) {
      setMessages([
        { comment_id: 1, comment_text: "Login to See Comments", name: "Admin" },
      ]);
    } else {
      fetch("http://localhost:8181/v1/comment/allComments", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response != null) setMessages(response);
          else
            setMessages([
              {
                comment_id: 1,
                comment_text: "No Comments Found",
                name: "Admin",
              }
            ]);
          console.log("im in fetch \nHere is data : \n" + messages);
        })
        .catch((err) => console.error(err));
    }
  },[isLogin, messages]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
      {messages.map((message) => (
        <Message key={message.comment_id} message={message} />
      ))}
    </Box>
  );
}

function Message({ message }) {
  console.log("Im in message " + message);
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
          backgroundColor: "primary.light",
        }}
      >
        <Typography variant="head">
          {message.user_id ? message.user_id.usernamename : "Unknown"}:
        </Typography>
        <Typography variant="body1">{message.comment_text}</Typography>
      </Paper>
    </Box>
  );
}
