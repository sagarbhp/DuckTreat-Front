import React, { useState } from "react";

import useGet from "../../hooks/useGet";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Pagination from "@material-ui/lab/Pagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spinner from "../StyledComponents/Spinner";
import ErrorMessage from "../StyledComponents/ErrorMessage";

//constant
import { API_ROOT } from "../../constants/key";

function PaginatedData() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perpage = 10;
  const { data, error, loading } = useGet(
    `${API_ROOT}/paginated-data/${page}/${perpage}`,
    (data) => {
      setTotal(data.total);
    }
  );

  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
  };
  return (
    <div className="dataTable-root">
      <h1>Input Data</h1>
      <div className="dataTable-container">
        {data && (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="right">Food Type</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Food Amount</TableCell>
                  <TableCell align="right">Duck Count</TableCell>
                  <TableCell align="right">Fed Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.food}
                    </TableCell>
                    <TableCell align="right">{row.foodType}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>

                    <TableCell align="right">{row.country}</TableCell>
                    <TableCell align="right">{row.foodAmount}</TableCell>
                    <TableCell align="right">{row.ducksFed}</TableCell>
                    <TableCell align="right">
                      {new Date(row.feedTime).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Total Entries: {data.total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {loading && <Spinner />}
        {error && <ErrorMessage error={error} />}
        <div className="dataTable-pagination">
          {total && (
            <Pagination
              count={Math.ceil(total / perpage)}
              page={page}
              onChange={handleChange}
            />
          )}
        </div>
      </div>

      <style jsx>
        {`
          .dataTable-root {
            padding: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .dataTable-container {
            text-align: center;
            width: 50%;
          }
          .dataTable-pagination {
            margin: 20px;
            display: flex;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .dataTable-container {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PaginatedData;
