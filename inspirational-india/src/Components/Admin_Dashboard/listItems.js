import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Grid, List, Paper, Typography } from "@mui/material";

export default function ListItems(props) {
  const [ListObject, setListObject] = React.useState([]);
  let count = 0;
  // let ListObject=["No Items"];

  React.useEffect(() => {
    console.log(props.fetchUrl)
    fetch(props.fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setListObject(response);
        // ListObject=response;
      }) 
      .catch((err) => console.error(err));
  },[props.fetchUrl]);

  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        xl={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: "5" },
        }}
      >
        <Paper
          sx={{
            p: 2,
            bgcolor: "#0f2027",
            height: "65vh",
            width: "350px",
            overflow: "scroll",
            mt: 8,
          }}
        >
          <Typography component="h1" variant="h5" color="white">
            {props.TitleName} List :
            <hr />
          </Typography>
          <List>
            {ListObject.map((obj) => (
              <>
                <ListItemButton key={obj.id}>
                  <Typography sx={{ color: "white" }}>
                    {(++count)+'. '+obj.name}
                  </Typography>
                </ListItemButton>
                {/* <ListDivider sx={{ bgcolor: "white" }} /> */}
              </>
            ))}
          </List>
        </Paper>
      </Grid>
    </>
  );
}
