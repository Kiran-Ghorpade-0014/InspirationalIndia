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

export default function RegionReport() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8181/v1/region/allRegions", {
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
        Region List Report
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
                  <Typography>Region Id</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>Name</Typography>
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
            rows.map((row) => (
              <TableRow key={row.region_id}>
                {/* {key_arr.map((column) => { */}
                <TableCell>{row.region_id}</TableCell>
                <TableCell>{row.name}</TableCell>
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
