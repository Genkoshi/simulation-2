import React, { Component } from 'react';
import '../reset.css';
import '../App.css';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, updateUserId } from '../ducks/reducer';
import imgSrc from './images/auth_logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        let { updatePassword, updateUsername, updateUserId } = this.props;
        var register = () => {
            axios.post('/api/users', {username: this.props.username, password: this.props.password})
        }
        return (
            <div className='home'>
                <img src={imgSrc} alt='logo' id='auth-logo' />
                <span>Username</span>
                <input value={this.props.username} onChange={e => updateUsername(e.target.value)} />
                <span>Password</span>
                <input value={this.props.password} type='password' onChange={e => updatePassword(e.target.value)} />
                <div>
                    <button className='login'>Login</button>
                    <Link to='/Dashboard'><button onClick={register} className='register' >Register</button></Link>
                </div>
            </div>
        )
    }
}

let actions = {
    updateUsername,
    updatePassword,
    updateUserId
}

function mapStateToProps(state) {
    console.log(state.username)
    return {
        username: state.username,
        password: state.password,
        userid: state.userid
    }
}

export default connect(mapStateToProps, actions)(Home);
