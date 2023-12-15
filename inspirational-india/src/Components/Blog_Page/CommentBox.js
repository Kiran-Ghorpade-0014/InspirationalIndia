import * as React from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function CommentBox(props) {
  let messages =[{comment_id:1, comment_text:"No Comments Found !"}];
  // let messages = [
    //   { id: 1, text: "Hi there!", sender: "bot" },
    //   { id: 2, text: "Hello!", sender: "bot" },
    //   { id: 3, text: "How can I assist you today?", sender: "bot" },
    //   { id: 1, text: "Hi there!", sender: "bot" },
  //   { id: 2, text: "Hello!", sender: "bot" },
  //   { id: 3, text: "How can I assist you today?", sender: "bot" },
  //   {
  //     id: 3,
  //     text: " **Gaddi Tribe:** The Gaddi people primarily reside in the hilly areas of Himachal Pradesh. They have a unique culture and way of life, often dependent on animal husbandry, especially sheep and goats. The Gaddi are known for their colorful attire, traditional songs, and dances. - **Gujjar Tribe:** The Gujjar community is spread across multiple northern states, including Himachal Pradesh, Jammu and Kashmir, and parts of Uttarakhand. They are traditionally involved in cattle rearing and are known for their semi-nomadic lifestyle. - **Cultural Significance:** The Himalayan Region is culturally rich, with a deep connection to nature and spirituality. The indigenous tribes in this area have their own distinct languages, traditions, and rituals. Many of them celebrate festivals related to their agricultural practices and the changing seasons. - **Economy:** Due to the challenging terrain, the economy of the Himalayan region is often based on agriculture, animal husbandry, and, in some areas, tourism. The region attracts tourists and trekkers from around the world who come to explore its natural beauty and engage in outdoor activities. - **Conservation:** The Himalayan region is ecologically significant, as it is home to diverse flora and fauna. Efforts are made to protect the unique biodiversity and fragile ecosystems in this region. National parks and wildlife sanctuaries, like Jim Corbett National Park and Great Himalayan National Park, are part of conservation initiatives. The Himalayan Region is not only ",
  //     sender: "bot",
  //   },
  // ];
  
  let isLogin = false;
  
  if (sessionStorage.getItem("userType") === "USER") {
    isLogin = true;
  } else if (sessionStorage.getItem("userType") === "ADMIN") {
    isLogin = true;
  } else {
    isLogin = false;
  }
  const [input, setInput] = React.useState("");
  
  const handleSend = () => {
    if (input.trim() !== "") {
      setInput("");
      
      if (isLogin) {
        const user = sessionStorage.getItem("userDetails");

        const formData = new FormData();
        formData.append("user_id", user?JSON.parse(user).user_Id:0);
        formData.append("comment_text", input);
        formData.append("blog_id", props.blogId);
        console.log(formData)

        fetch("http://localhost:8181/v1/comment/add", {
          method: "POST",
          body: formData,
        })
        .then((response) => {
          if (response.status === 201) alert("Commented Successfully...");
          loadMessages();
        })
        .catch(() => {
          alert("Exception Occured.");
        });
      } else {
        alert("Login Required...");
      }
    }
  };
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  function loadMessages (){
    if(!isLogin){
      messages=[{comment_id:1, comment_text: "Login to See Comments", sender:'bot'}];
  }
  else{
    fetch("http://localhost:8181/v1/Comment/allComments/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
      .then((response) => {
        if(response!=null)
        messages = response;
      })
      .catch((err) => console.error(err));
    }
  }
  
      // loadMessages();
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "hotpink",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.comment_id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              placeholder="Type a message"
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

const Message = ({ message }) => {
  // const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start" ,
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
        <Typography variant="body1">{message.comment_text}</Typography>
      </Paper>
    </Box>
  );
};

export default CommentBox;
