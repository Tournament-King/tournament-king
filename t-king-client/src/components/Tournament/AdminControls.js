import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminControls extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {

        return (
            <main className='admin-controls-main'>

                <div className='score-buttons' style={{"left": "27.5%"}}>
                    <div className='score-buttons-plus'>+</div>
                    <div className='score-buttons-minus'>-</div>
                </div>
                <div className='score-buttons' style={{"right": "27.5%"}}>
                    <div className='score-buttons-plus'>+</div>
                    <div className='score-buttons-minus'>-</div>
                </div>

                <div className='admin-controls-start-match'>Start Match</div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(AdminControls);