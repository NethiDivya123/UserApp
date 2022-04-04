import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: []
        }
        this.addUser= this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({user: this.state.user.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUser().then((res) => {
            this.setState({ user: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User  Name</th>
                                    <th>user EmailId </th>
                                    <th>Password</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> { user.userName} </td>   
                                             <td> {user.userEmailId}</td>
                                             <td> {user.userPassword}</td>
                                             <td>
                                                 <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListComponent
