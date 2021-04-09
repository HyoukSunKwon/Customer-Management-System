import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
})


class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender:'',
            job:'',
            fileName:'',
            open: false
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
        .then((res) => {
            console.log(res.data);
            this.props.stateRefresh();
        })
        this.setState({
            file: null,
            userName:'',
            birthday:'',
            gender:'',
            job: '',
            fileName: '',
            open: false
        })
    }

    handleFilechange=(e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange =(e)=>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
            'content-type': 'multipart/form-data'
            }
        }

        return post(url, formData, config);
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () =>{
        this.setState({
            file:null,
            userName:'',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <button variant="contained" color="primary" onClick={this.handleOpen}>
                    Add Customers
                </button>
                <Dialog open={this.state.open}>
                    <DialogTitle> Add Customer</DialogTitle>
                    <DialogContent>
                    <input  className={classes.hidden} accept="image/*"  id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFilechange} />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {this.state.fileName === "" ? " Select Profile Image " : this.state.fileName }
                        </Button>
                    </label> <br />
                    <TextField label="Name" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /> <br />
                    <TextField label="Birthday" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /> <br />
                    <TextField label="Gender" type="text"  name="gender" value={this.state.gender} onChange={this.handleValueChange} /> <br />
                    <TextField label="Job" type="text"  name="job" value={this.state.job} onChange={this.handleValueChange} /> <br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" clolor="primary" onClick={this.handleFormSubmit}> Add </Button>
                        <Button variant="outlined" clolor="primary" onClick={this.handleClose}> Close </Button>
                    </DialogActions>
                </Dialog>
            </div>
            // <form onSubmit={this.handleFormSubmit}>
            //     <h1>Add Customer</h1>
            //     Image: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFilechange} /> <br/>
            //     Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /> <br />
            //     Birthday: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /> <br />
            //     Gender: <input type="text"  name="gender" value={this.state.gender} onChange={this.handleValueChange} /> <br />
            //     Job: <input type="text"  name="job" value={this.state.job} onChange={this.handleValueChange} /> <br />
            //     <button type="submit"> Add Customer </button>
            // </form>
        )
    }
} 

export default withStyles(styles)(CustomerAdd);