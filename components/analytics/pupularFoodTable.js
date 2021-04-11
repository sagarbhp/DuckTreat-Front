import React from "react";

import useGet from "../../hooks/useGet";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spinner from "../StyledComponents/Spinner";
import ErrorMessage from "../StyledComponents/ErrorMessage";

//constants
import { API_ROOT } from "../../constants/key";

function PopularFoodTable() {
  //getting data from api
  const { data, error, loading } = useGet(`${API_ROOT}/popular-food`);

  return (
    <div className="foodTable-root">
      <h1>Popular Foods</h1>
      <div className="foodTable-container">
        {data && (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="right">Entries</TableCell>
                  <TableCell align="right">Countries</TableCell>
                  <TableCell align="right">Total Ducks Fed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">{row.country.length}</TableCell>
                    <TableCell align="right">{row.ducksFed}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Total Entries: {data.total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      {loading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      <style jsx>
        {`
          .foodTable-root {
            padding: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .foodTable-container {
            text-align: center;
            width: 50%;
            max-height: 600px;
            overflow-y: scroll;
          }
          @media (max-width: 1200px) {
            .foodTable-container {
              width: 95%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PopularFoodTable;
