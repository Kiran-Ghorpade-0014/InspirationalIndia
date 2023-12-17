import * as React from "react";
import { Box, TextField, Button,  Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBox from "./MessageBox";

function CommentBox(props) {
  //assigments
  let input="";
  let isLogin = false;

  //check login setup
  if (sessionStorage.getItem("userType") === "USER") {
    isLogin = true;
  } else if (sessionStorage.getItem("userType") === "ADMIN") {
    isLogin = true;
  } else {
    isLogin = false;
  }

  //handle send comment
  const handleSend = () => {
    if (input.trim() !== "") {
      if (isLogin) {
        const user = sessionStorage.getItem("userDetails");

        const formData = new FormData();
        formData.append("user_id", user ? JSON.parse(user).user_Id : 0);
        formData.append("comment_text", input);
        formData.append("blog_id", props.blogId);
        console.log(formData);

        fetch("http://localhost:8181/v1/comment/add", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.status === 201) alert("Commented Successfully...");
          })
          .catch(() => {
            alert("Exception Occured.");
          });
      } else {
        alert("Login Required...");
      }
    }
  };

  //handle input change
  const handleInputChange = (event) => {
    input=event.target.value;
  };

  
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "hotpink",
      }}
    >
      <MessageBox/>

      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              placeholder="Type a comment"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
              sx={{
                mt: 1,
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CommentBox;
