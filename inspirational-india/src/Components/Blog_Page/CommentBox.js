import * as React from "react";
import Typography from "@mui/material/Typography";
import { Message } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CommentBox() {
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
          <Grid item md={12}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                height: "60vh",
                // width: "100vw"
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "start",
                overflow: "hidden",
              }}
            >
              <Message />
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
              <Typography>😍😍😍</Typography>
            </Box>
          </Grid>
          <Grid item>
            <TextField
              margin="normal"
              id="comment"
              label="comment"
              name="text"
              autoFocus
              sx={{
                bgcolor: "white",
                width: { xl: "50%", xs: "50%", md: "50%" },
                // mb: 2,
                mt: 0,
                ml: 5,
              }}
            />
            <Button
              size="large"
              variant="contained"
              sx={{ mb: 2, ml: 5 }}
              href="#"
            >
              Send
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default CommentBox;
