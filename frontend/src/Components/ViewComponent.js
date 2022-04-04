import React from 'react';
import UserService from '../services/UserService';

class ViewComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,user:{}
        }
    }
    componentDidMount()
    {
        UserService.getUserById(this.state.id).then(res=>{
            this.setState({user:res.data})
        })
    }
    render()
    {
        return(
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View User Data  </h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>User Name</label>
                        <div>{this.state.user.userName}</div>
                    </div>
                    <div className='row'>
                        <label>user EmailId</label>
                        <div>{this.state.user.userEmailId}</div>
                    </div>
                    <div className='row'>
                        <label>password</label>
                        <div>{this.state.user.userPassword}</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ViewComponent;