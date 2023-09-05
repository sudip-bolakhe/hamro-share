import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, listUser } from "../service/rest-api";

export default function ListUser() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteUser(id).then((data) => {
      navigate(0);
    });
  };
  const loadUser = () => {
    listUser()
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>

              <TableCell align="right">
                <div>
                  <Link to={`/users/edit/${row._id}`}>
                    <ModeEditIcon />
                  </Link>
                  &nbsp; &nbsp;
                  <DeleteIcon onClick={() => handleDelete(row._id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
