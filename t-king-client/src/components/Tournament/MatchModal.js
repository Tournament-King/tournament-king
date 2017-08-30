import React from 'react';
import {connect} from 'react-redux';

const MatchModal = (props) => {
    let hideDisplay = {
        "display":"none"
    }
    return (
        <main className='matchModal' style={props.modalActive ? null : hideDisplay}>

        </main>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(MatchModal);