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
import { render } from '@testing-library/react';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
})
const customers =[
   {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Elisa Ng',
  'birthday': '210211',
  'gender': 'Fmail',
  'job': 'Students'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'James Tommer',
  'birthday': '210221',
  'gender': 'Male',
  'job': 'Programmer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Skylar Kwon',
  'birthday': '210321',
  'gender': 'Femail',
  'job': 'Doctor'
}
]



class App extends Component{
  render(){
  const { classes } =this.props;
  return (
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
         { customers.map( c => { return (
         <Customer  key= { c.id } id={ c.id } image={ c.image } name={ c.name } birthday={ c.birthday } gender={ c.gender} job ={ c.job } /> )})}
         </TableBody>
       </Table>
    </Paper>
  );}
}

export default withStyles(styles) (App);
