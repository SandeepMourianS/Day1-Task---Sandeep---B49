import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Table.css'
import { maintain } from '../../Diet/diet';
import { useContext } from 'react';

const handleChange = (id) => {
  const item = maintain.filter(item => item.id == id);
  console.log(item[0]);
}

function MyTable() {
  return (
    <TableContainer className='table-container'>
      <Table sx={{ width: 690 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Food Name</b></TableCell>
            <TableCell align="center"><b>Calorie Intake</b></TableCell>
            <TableCell align="center"><b>Completed</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {maintain.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center"><input className = "form-check-input"
               onChange={()=>handleChange(row.id)} type="checkbox" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable