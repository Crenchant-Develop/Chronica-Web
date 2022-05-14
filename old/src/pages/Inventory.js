import React from 'react';

//defined components
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../components/Theme';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id, quantity) {
  return { name, id, quantity };
}

const rows = [
  createData('붉은 포션', 1, 6),
  createData('푸른 포션', 2, 9),
  createData('약초', 3, 16),
  createData('부활초', 4, 3),
  createData('집 열쇠', 5, 1),
];

function TestButton() {
  return (
    <article className="context">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <ThemeProvider theme={Theme}>
          <Button variant="contained" size="large" onClick={(event) => {
          }}>직렬화</Button>
          <Button variant="contained" size="large" onClick={(event) => {
          }}>역직렬화</Button>
        </ThemeProvider>
      </Stack>
    </article>
  );
};

function Inventory() {
  return (
    <>
      <br /><br />
      <ThemeProvider theme={Theme}>
        <TableContainer style={{ width: '50%', margin: 'auto' }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>아이템</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">수량</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell component="th">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  );
};

export { TestButton, Inventory };