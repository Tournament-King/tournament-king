import React from 'react';
import {connect} from 'react-redux';


const Landing = function(props) {

    return (
        <main className="landing-wrapper">
            {props.testProp}, you have landed
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Landing);