import React, {Component} from 'react';
import {connect} from 'react-redux';


class AccountSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameInput: '',
            nameInput: '',
            emailInput: '',
            locationInput: ''
        }

        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handleLocationInput = this.handleLocationInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);
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

    componentDidMount() {
        let username = this.props.currentUser ?
            this.props.currentUser.username ?
            this.props.currentUser.username : '' : ''
        this.setState({
            usernameInput: username,
            nameInput: this.props.currentUser ? this.props.currentUser.name : ''
        })
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
                        <input placeholder="username" />
                        <p>Full name</p>
                        <input placeholder="name" />
                        <p>Email</p>
                        <input placeholder="email" />
                        <p>Location</p>
                        <input placeholder="location" />
                        <button>Accept Changes</button>
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AccountSettings);