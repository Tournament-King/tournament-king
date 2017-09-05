import React, {Component} from 'react';
import {connect} from 'react-redux';

class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameInput: ''
        }
    }

    render() {
        return(
            <main className="splash-wrapper">
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Splash);