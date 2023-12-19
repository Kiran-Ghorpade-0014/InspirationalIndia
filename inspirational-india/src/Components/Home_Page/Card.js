import * as React from "react";
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia, Container } from "@mui/material";

export default function MediaCard(props) {
  return (
    <>
      <Container
        sx={{
          width: 180,
          mb: 2
        }}
      >
        <Card
          sx={{
            width: 180,
            maxWidth: 250,
            height: 200,
            backgroundColor: "white",
          }}
        >
          <CardMedia
            sx={{
              height: 200,
              width: 180
            }}
            image={
              props.image ? props.image : "publicimages\north_east_india.jpg"
            }
            title={props.name}
          />
        </Card>
        <Typography sx={{color:'white', fontFamily:'monospace'}}>{props.title}</Typography>
      </Container>
    </>
  );
}
