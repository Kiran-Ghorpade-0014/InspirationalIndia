import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <>
      <Typography gutterBottom variant="subtitle" component="div" color="white">
        Snow Leopard
      </Typography>
      <Card sx={{width:180, maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 250 }}
          image="/images/snow-leoperd.jpg"
          title="snow leoperd"
        />
      </Card>
    </>
  );
}
