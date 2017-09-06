import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../redux/mainReducer';


class AccountSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameInput: '',
            nameInput: '',
            emailInput: '',
            locationInput: '',
            updateClicked: false
        }

        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUsernameInput(e) {
        this.setState({
            usernameInput: e.target.value
        })
    }

    handleNameInput(e) {
        this.setState({
            nameInput: e.target.value
        })
    }

    handleEmailInput(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleLocationInput(e) {
        this.setState({
            locationInput: e.target.value
        })
    }

    handleUpdate() {
        let body = {
            username: this.state.usernameInput,
            name: this.state.nameInput,
            email: this.state.emailInput,
            location: this.state.locationInput
        }
        this.props.updateUser(body)
        this.setState({
            updateClicked: true
        })
    }

    componentDidMount() {
        axios.get('/api/user').then(user => {
            console.log(user.data)
            this.setState({
                usernameInput: user.data.username ? user.data.username : '',
                nameInput: user.data.name,
                emailInput: user.data.email,
                locationInput: user.data.location ? user.data.location : ''
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userUpdated) {
            return window.location.href = 'http://localhost:3030/auth/callback';
        }
        return;
    }



    render() {
        return (
            <main className="settings-wrapper">
                <div className="settings-content">
                    <h1>Account</h1>
                    <div className="settings-pic-span">
                        <div className="settings-pic">
                            <img alt="" src={this.props.currentUser ?
                            this.props.currentUser.profile_pic :
                            null} />
                        </div>
                    </div>
                    <div className="settings-form">
                        <p>Username</p>
                        <input placeholder="username" 
                            onChange={this.handleUsernameInput}
                            value={this.state.usernameInput}/>
                        <p>Full name</p>
                        <input placeholder="name" 
                            onChange={this.handleNameInput}
                            value={this.state.nameInput}/>
                        <p>Email</p>
                        <input placeholder="email" 
                            onChange={this.handleEmailInput}
                            value={this.state.emailInput}/>
                        <p>Location</p>
                        <input placeholder="location" 
                            onChange={this.handleLocationInput}
                            value={this.state.locationInput}/>
                        <button onClick={this.handleUpdate}>
                            {this.state.updateClicked ? 'Loading' : 'Accept Changes'}
                        </button>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,
    {updateUser}
)(AccountSettings);