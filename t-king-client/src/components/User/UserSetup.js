import React, {Component} from 'react';
import connect from react-redux;


class UserSetup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameInput: '',
            emailInput: ''
        }
    }

    render() {
        return (
            <main className="user-setup-wrapper">
            </main>
        )
    }
}