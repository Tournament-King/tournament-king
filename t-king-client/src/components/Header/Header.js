import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCurrentUser} from './../../redux/mainReducer';

const checkUser = function(props) {
    return props.userChecked ? null : props.getCurrentUser()
}



const Header = function(props) {
    checkUser(props)
    return (
        <main className="header-wrapper">
            <Link to="/">
                <div className="header-logo">
                    <h1>TK</h1>
                </div>
            </Link>
            <div className="header-right">
                <Link to="/newbracket">
                    <div className="header-anchor">
                        <h6>NEW BRACKET</h6>
                    </div>
                </Link>
                {props.currentUser ? 
                <div className="header-user">
                    <img alt="" src={props.currentUser.profile_pic} />
                </div> :
                <a href="http://localhost:3030/auth" className="header-login">
                    <strong>LOGIN</strong>
                </a>}
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {getCurrentUser})(Header)