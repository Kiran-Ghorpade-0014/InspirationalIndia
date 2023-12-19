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

export default function TribeReport() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8181/v1/tribe/allTribes", {
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
        Tribe List Report
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
                  <Typography>Tribe Id</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>Name</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>Region</Typography>
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
              <TableRow key={row.tribe_id}>
                <TableCell>{row.tribe_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  {row.region_id ? row.region_id.name : "no region found"}
                </TableCell>
                <TableCell>{row.description}</TableCell>
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
