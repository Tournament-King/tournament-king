import React from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from './../../redux/mainReducer';

const checkUser = function(props) {
    return props.userChecked ? null : props.getCurrentUser()
}

const Header = function(props) {
    checkUser(props)
    return (
        <main className="header-wrapper">
            <div className="header-logo">
                <h1>TK</h1>
            </div>
            <div className="header-right">
                <a href="http://localhost:3030/auth" className="header-anchor">
                    <h6>NEW BRACKET</h6>
                </a>
                <a href="http://localhost:3030/auth" className="header-login">
                    <strong>LOGIN</strong>
                </a>
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {getCurrentUser})(Header)