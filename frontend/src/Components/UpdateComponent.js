import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userName: '',
            userEmailId: '',
            userPassword: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailIdHandler = this.changeUserEmailIdHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({userName: user.userName,
                userEmailId: user.userEmailId,
                userPassword : user.userPassword
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, userEmailId: this.state.userEmailId, userPassword: this.state.userPassword};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/user');
        });
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changeUserEmailIdHandler= (event) => {
        this.setState({userEmailId: event.target.value});
    }

    changeUserPasswordHandler= (event) => {
        this.setState({userPassword: event.target.value});
    }

    cancel(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> user EmailId: </label>
                                            <input placeholder="EmailId" name="userEmailId" className="form-control" 
                                                value={this.state.userEmailId} onChange={this.changeUserEmailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> password </label>
                                            <input type="password" placeholder="password" name="userPassword" className="form-control" 
                                                value={this.state.userPassword} onChange={this.changeUserPasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateComponent
