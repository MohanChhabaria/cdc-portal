import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpWhenVisible from '../components/Animation/FadeUp';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 'auto',
    maxWidth: 700,
    border: 'black',
  },
  tablewrapper: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    textAlign: 'center',
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
    [theme.breakpoints.down(350)]: {
      padding: 10,
    },
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'left',
    width: 'auto',
    fontSize: '1rem',
    color: 'black',
  },
}));

function createData(name, calories, points) {
  return { name, calories, points };
}

const rows = [
  createData('A*', 'Exceptional', 10),
  createData('A', 'Outstanding', 10),
  createData('A-', 'Excellent', 9),
  createData('B', 'Very Good', 8),
  createData('B-', 'Good', 7),
  createData('C', 'Average', 6),
  createData('C-', 'Below Average', 5),
  createData('D', 'Marginal', 4),
  createData('E', 'Poor', 2),
  createData('F', 'Fail', 0),
  createData('I', 'Incomplete', '-'),
  createData('S', 'Satisfactory in Course', '-'),
  createData('X', 'Thesis Continuation', '-'),
  createData('U', 'Unsatisfactory', '-'),
  createData('W', 'Withdrawn', '-'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '30px' }} item xs={12}>
            <FadeInWhenVisible>
              <Paper className={classes.paper}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 30 }}
                >
                  Grade System
                </Typography>
              </Paper>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12}>
            <FadeUpWhenVisible>
              <Paper className={classes.paper}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 16 }}
                >
                  The evaluation system in the Institute is based on the
                  Cumulative Grade Point Average (CGPA) calculated on a scale of
                  10. The grading policy is followed with the following
                  distribution of points:
                </Typography>
                <TableContainer
                  className={classes.tablewrapper}
                  component={Paper}
                  elevation={0}
                >
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">GRADES</TableCell>
                        <TableCell align="center">DENOTION</TableCell>
                        <TableCell align="center">POINTS</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="center" component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">{row.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </FadeUpWhenVisible>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
