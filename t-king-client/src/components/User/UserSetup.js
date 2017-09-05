import React, {Component} from 'react';
import {connect} from 'react-redux';


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
            <main className="settings-wrapper">
                <div className="settings-content">
                    asdfasdf
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(UserSetup);