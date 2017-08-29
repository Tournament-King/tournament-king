import React from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from './../../redux/mainReducer';

const checkUser = function(props) {
    props.userChecked ? null : props.getCurrentUser()
}

const Header = function(props) {
    checkUser(props)
    return (
        <main className="header-wrapper">
            {props.testProp}, the current user is: {props.currentUser.name ? props.currentUser.name : 'no user'}
            <br />
            <a href="http://localhost:3030/auth">
                <button><strong>LOGIN</strong></button>
            </a>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {getCurrentUser})(Header)