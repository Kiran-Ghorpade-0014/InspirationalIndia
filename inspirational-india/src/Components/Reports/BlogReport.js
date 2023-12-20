import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

// function preventDefault(event) {
//   // event.preventDefault();
// }

export default function BlogReport() {
  const [rows, setRows] = React.useState([]);
  // let key_arr ;

  React.useEffect(() => {
    fetch("http://"+window.location.host.split(':')[0]+":8181/v1/blog/allBlogs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setRows(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant="h5"
        color={"primary.success"}
        sx={{ display: "flex", justifyContent: "center" ,mb:3}}
      >
        Blog List Report
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow
            sx={{
              fontStyle: "oblique",
            }}
          >
            {rows ? (
              <>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Blog Id</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>Name</Typography>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Upload Time</Typography>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Image</Typography>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Region</Typography>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Tribe</Typography>
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  <Typography>Description</Typography>
                </TableCell>
              </>
            ) : (
              <TableCell>No Columns Found</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.slice(0, 20).map((row) => (
              <TableRow key={row.blog_id}>
                {/* {key_arr.map((column) => { */}
                <TableCell>{row.blog_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.upload_dateTime}</TableCell>
                <TableCell>
                  <img
                    style={{ height: 100, width: 100 }}
                    src={"data:image/png;base64," + row.image}
                    alt="No img Found"
                  />
                </TableCell>
                <TableCell>
                  {row.region ? row.region.name : "no region found"}
                </TableCell>
                <TableCell>
                  {row.tribe ? row.tribe.name : "no tribe found"}
                </TableCell>
                <TableCell>{row.description.toString().slice(0, 20)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key="0">
              <TableCell>No rows Found</TableCell>;
            </TableRow>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
