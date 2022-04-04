import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userName:'',
            userEmailId:'',
            userPassword:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailIdHandler = this.changeUserEmailIdHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({userName: user.userName,
                    userEmailId: user.userEmailId,
                    userPassword : user.userPassword
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, userEmailId: this.state.userEmailId, userPassword: this.state.userPassword};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/user');
            });
        }else{
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/user');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User EmailId: </label>
                                            <input placeholder="Emailid" name="userEmailId" className="form-control" 
                                                value={this.state.userEmailId} onChange={this.changeUserEmailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Password </label>
                                            <input type="password" placeholder="password" name="userPassword" className="form-control" 
                                                value={this.state.userPassword} onChange={this.changeUserPasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
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

export default CreateComponent;
