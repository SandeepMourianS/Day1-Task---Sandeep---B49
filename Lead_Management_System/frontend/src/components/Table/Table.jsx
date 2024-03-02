import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext , useState } from 'react';
// import { dietContext } from '../Context/Context';
// import './Table.css'

function MyTable() {

    const value = [{ id : 1 , name : "Ravi" , gender : "male" },
{ id : 2 , name : "Naren" , gender : "male" },
{ id : 3 , name : "Musthafa" , gender : "male" },
{ id : 4 , name : "Surya" , gender : "female"  },
{ id : 5 , name : "Sakthi" , gender : "male" },
{ id : 6 , name : "Sibi" , gender : "male" },
{ id : 7 , name : "Mouri" , gender : "male" },
{ id : 8 , name : "Hema" , gender : "female" },
{ id : 9 , name : "Suma" , gender : "female" },
{ id : 10 , name : "Keerthi" , gender : "female" },


]


  return (
    <TableContainer className='table-container'>
      <Table sx={{ width: 700 }} aria-label="simple table">
        <TableHead className='head'>
          <TableRow>
            <TableCell align="center"><b> Name</b></TableCell>
            <TableCell align="center"><b> Gender</b></TableCell>
            <TableCell align="center"><b>Status</b></TableCell>
            <TableCell align="center"><b>Follow Up</b></TableCell>
            <TableCell align="center"><b>Call back</b></TableCell>
            <TableCell align="center"><b>Assigned</b></TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">
                <input
                className="form-check-input"
                // onChange={() => handleChange(row.id, !row.isChecked)}
                type="checkbox"
                // checked={row.isChecked}
              />
              </TableCell>
              <TableCell align="center">
                <input
                className="form-check-input"
                // onChange={() => handleChange(row.id, !row.isChecked)}
                type="checkbox"
                // checked={row.isChecked}
              />
              </TableCell>
              <TableCell align="center">
                <input
                className="form-check-input"
                // onChange={() => handleChange(row.id, !row.isChecked)}
                type="checkbox"
                // checked={row.isChecked}
              />
              </TableCell>
              <TableCell align="center">
                <input
                className="form-check-input"
                // onChange={() => handleChange(row.id, !row.isChecked)}
                type="checkbox"
                // checked={row.isChecked}
              />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable