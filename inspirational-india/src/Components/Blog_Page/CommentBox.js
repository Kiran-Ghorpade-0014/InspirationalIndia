import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, List, ListItemButton, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CommentBox() {
  let isLogin = false;
  if (sessionStorage.getItem("userType") === "USER") {
    isLogin = true;
  } else if (sessionStorage.getItem("userType") === "ADMIN") {
    isLogin = true;
  } else {
    isLogin = false;
  }

  const ListObject = ["wow","incredible","informative"];

  function sendComment(){
      const user = sessionStorage.getItem('userDetails');
      const commentDetails = "";
      fetch("http://localhost:8181/v1/comment/add", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(commentDetails),
      })
        .then((response) => {
          if(response.status === 201)
          alert("Commented Successfully...");
          // navigate("/signin");
        })
        .catch(() => {
          alert("Exception Occured.")
        });
  }

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Paper
          sx={{
            position: "relative",
            backgroundColor: "#094141",
            color: "#fff",
            mb: 4,
            ml: 1,
            width: { xs: "90vw", xl: "30vw", md: "30vw" },
          }}
        >
          <Grid item md={12} sx={{ overflow: "scroll", overflowY: "none" }}>
            <Box
              sx={{
                // position: "relative",
                p: { xs: 3, md: 6 },
                height: "50vh",
                // width: "100vw"
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "start",
              }}
            >
              {/* <Message />
              <Typography>Wonderful</Typography>
              <Message />
              <Typography>boring😒</Typography>
              <Message />
              <Typography>Nice</Typography>
              <Message />
              <Typography>👍</Typography>
              <Message />
              <Typography>Kdkkkk</Typography>
              <Message />
              <Typography>Love you🤍</Typography>
              <Message />
              <Typography>😍😍😍</Typography> */}
              <List>
            {ListObject.map((obj) => (
              <>
                <ListItemButton key={obj}>
                  <Typography sx={{ color: "white" }}>
                    {obj}
                  </Typography>
                </ListItemButton>
                {/* <ListDivider sx={{ bgcolor: "white" }} /> */}
              </>
            ))}
          </List>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid component='form' container>
              <Grid item xl={8}>
                <TextField
                  sx={{
                    bgcolor: "white",
                    ml: 5,
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="comment"
                  label="Comment"
                  name="comment"
                />
              </Grid>
              <Grid item xl={4}>
                <Button
                  size="large"
                  variant="contained"
                  sx={{ mb: 2, ml: 5 }}
                  href={isLogin?sendComment:"/signin"}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default CommentBox;
