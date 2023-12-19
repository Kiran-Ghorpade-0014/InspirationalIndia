import * as React from "react";
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent, CardMedia } from "@mui/material";

export default function MediaCard(props) {
  return (
    <>
      <Card
        sx={{
          width: 180,
          maxWidth: 250,
          height: 200,
          backgroundColor: "white",
        }}
      >
        {/* <CardContent>
          <Typography
            gutterBottom
            variant="title"
            component="div"
            color="black"
          >
            {props.title}
          </Typography>
        </CardContent> */}
        <CardMedia
          sx={{
            height: 200,
            width: 180,
            // backgroundPosition: "center",
            // // backgroundRepeat: "no-repeat",
            // // backgroundSize: "cover",
          }}
          image={props.image?props.image:"public\images\north_east_india.jpg"}
          title={props.name}
        />
      </Card>
    </>
  );
}
