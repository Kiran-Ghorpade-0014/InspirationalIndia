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

export default function UserReport() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://"+window.location.host.split(':')[0]+":8181/v1/user/allUsers", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        setRows(response);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(rows);

  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant="h5"
        color={"primary.success"}
        sx={{ display: "flex", justifyContent: "center" ,mb:3}}
      >
        User List Report
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
                  <Typography>User Id</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>UserName</Typography>
                </TableCell>

                <TableCell sx={{ color: "red" }}>
                  <Typography>Email</Typography>
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
              <TableRow key={row.user_Id}>
                <TableCell>{row.user_Id}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
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
