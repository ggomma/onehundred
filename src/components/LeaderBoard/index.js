import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import $ from 'jquery';

import { web } from '../../data';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 900,
  },
  body: {
    fontSize: 14,
    padding: 10,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    cursor: 'pointer',
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
});

export default function LeaderBoard() {
  const classes = useStyles();
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(web)
      .then((result) => {
        const d = $('<div/>').html(result.data).contents();
        const data = d.find('tbody').find('tr').slice(2).toArray();

        /**
         * {
         *   [name]: {
         *     success: 3,
         *     link: 'https~~~',
         *     lastDate: '2020.04.08',
         *   }
         * }
         */
        const allData = {};
        data.forEach((datum) => {
          const c = $(datum).find('td').toArray();

          const userData = {
            name: '',
            link: '',
            lastDate: '',
          };
          c.forEach((cc, i) => {
            const k = $(cc).text();
            
            if (i === 0) { // Date
              const time = k.split(' 오')[0];
              userData.lastDate = time;
            } else if (i === 1) { // Name
              userData.name = k;
            } else if (i === 2) { // Link
              userData.link = k;
            }
          });

          const savedUserData = allData[userData.name];
          if (savedUserData) {
            // Compare date
            if (savedUserData.lastDate === userData.lastDate) {
              allData[userData.name] = {
                ...savedUserData,
                link: userData.link,
              };
            } else {
              allData[userData.name] = {
                success: savedUserData.success + 1,
                link: userData.link,
                lastDate: userData.lastDate,
              };
            }
          } else {
            allData[userData.name] = {
              success: 1,
              link: userData.link,
              lastDate: userData.lastDate,
            };
          }
        });

        const arrayData = Object.keys(allData).map((name) => ({
          name,
          success: allData[name].success,
          link: allData[name].link,
        }))
        const sortedData = arrayData.sort((a, b) => b.success - a.success);
        const rows = sortedData.map((r, i) => ({
          rank: i + 1,
          name: r.name,
          success: r.success,
          link: r.link,
        }));
        setData(rows);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.rank} onClick={() => window.open(row.link)}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.rank}위
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.success}일 성공</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}