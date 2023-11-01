import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <>
      <Typography gutterBottom variant="subtitle" component="div" color="white">
        Snow Leopard
      </Typography>
      <Card sx={{width:180, maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 230 }}
          image={props.image}
          title="snow leoperd"
        />
      </Card>
    </>
  );
}
