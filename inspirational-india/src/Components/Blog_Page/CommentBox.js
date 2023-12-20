import * as React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBox from "./MessageBox";

function CommentBox(props) {
  //assigments
  const [input, setInput] = React.useState("");
  const [isCommented, setIsCommented] = React.useState(true);


  //handle send comment
  const handleSend = () => {
    if (input.trim() !== "") {
      if (props.isLogin) {
        const user = sessionStorage.getItem("userDetails");

        const formData = new FormData();
        formData.append("user_id", user ? JSON.parse(user).user_Id : 0);
        formData.append("comment_text", input);
        formData.append("blog_id", props.blogId);
        console.log(formData);

        fetch("http://"+window.location.host.split(':')[0]+":8181/v1/comment/add", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.status === 201) alert("Commented Successfully...");
            setIsCommented(true);
          })
          .catch(() => {
            alert("Exception Occured.");
          });
      } else {
        alert("Login Required...");
      }
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255,255,255,0.2)",
        mb:'5px'
      }}
    >
      <MessageBox blogId={props.blogId} flag={isCommented} updateFlag={()=>setIsCommented(false)}/>
      <Box sx={{ p: 2, backgroundColor: "rgba(255,255,255,0.8)" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              placeholder="Type a comment"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
