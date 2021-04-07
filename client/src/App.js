import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { render } from '@testing-library/react';
import CustomerAdd from './components/CustomerAdd';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  progress: {
    margin: theme.spacing(2)
  }
})

class App extends Component{
  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({ customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0: completed + 1})
  }

  render(){
  const { classes } =this.props;
  return (
    <div>
        <Paper className={ classes.root}>     
        <Table className={ classes.table }>
          <TableHead >
            <TableRow >
              <TableCell className= { classes.head } > Id </TableCell>
              <TableCell className= { classes.head }> Image </TableCell>
              <TableCell className= { classes.head }> Name </TableCell>
              <TableCell className= { classes.head }> Birthday </TableCell>
              <TableCell className= { classes.head }> Gender </TableCell>
              <TableCell className= { classes.head }> Job </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { this.state.customers ? this.state.customers.map( c => { return (
          <Customer  key= { c.id } id={ c.id } image={ c.image } name={ c.name } birthday={ c.birthday } gender={ c.gender} job ={ c.job } /> )})
            : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
            </TableCell>
          </TableRow>}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd />
    </div>
  );}
}

export default withStyles(styles) (App);
