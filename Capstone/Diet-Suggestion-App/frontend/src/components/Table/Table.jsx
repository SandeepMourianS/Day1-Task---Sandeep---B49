import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext , useState } from 'react';
import { dietContext } from '../Context/Context';
import './Table.css'

function MyTable() {

  const { setValue , setDietItems , value , dietItems , add , totalDietAmount } = useContext(dietContext);

  const total = totalDietAmount();

  const handleChange = (id, isChecked) => {
    const updatedMaintain = value.map((item) =>
      item.id === id ? { ...item, isChecked } : item
    );
    setValue(updatedMaintain);
  };

  return (
    <TableContainer className='table-container'>
      <Table sx={{ width: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Food Name</b></TableCell>
            <TableCell align="center"><b>Calorie Intake</b></TableCell>
            <TableCell align="center"><b>Completed</b></TableCell>
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
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">
                <input
                className="form-check-input"
                onChange={() => handleChange(row.id, !row.isChecked)}
                type="checkbox"
                checked={row.isChecked}
              />
              <button
                className="btn tableButton"
                onClick={() => add(row.id)}
                checked={row.isChecked}>+</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable