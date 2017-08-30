import React from 'react';
import {connect} from 'react-redux';


const Landing = function(props) {

    return (
        <main className="landing-wrapper">
            <div className="landing-splash">
            </div>
            <div className="landing-content">
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Landing);