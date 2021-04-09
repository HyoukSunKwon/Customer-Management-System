import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

class CustomerDelete extends React.Component {  

    constructor(props){
        super(props);
        this.state = {
            open: false
        };       
    }

    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    render(){
        return(
            <div>
            <Button  color="secondary" onClick={this.handleOpen} > Delete </Button>
            <Dialog open={this.state.open}>
                <DialogTitle>
                 Delete Customer
                </DialogTitle>
                <DialogContent>
                    Delete the customer information.
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="secondary" onClick={(e) => {this.deleteCustomer(this.props.id)}}> Delete </Button>
                <Button variant="outlined" color="primary" onClick={this.handleClose}> Close </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

export default CustomerDelete;