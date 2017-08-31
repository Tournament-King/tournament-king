import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMatchModal} from './../../redux/mainReducer.js';
// import pingpongBackground from './img/ping-pongBackground';




class MatchModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalHeight: null,
            modalWidth: null,
            modalLeft: null,
            modalTop: null,
            matchType: 'beer-pong'
        }

        this.maxModal = this.maxModal.bind(this);
        this.minModal = this.minModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }


    maxModal() {
        this.setState({
            modalHeight: {"height":"90%"},
            modalWidth: {"width":"90%"},
            modalLeft: {"left":"5%"},
            modalTop: {"top":"42px"}
        })
    }

    minModal() {
        this.setState({
            modalHeight: null,
            modalWidth: null,
            modalLeft: null,
            modalTop: null
        })
    }

    toggleModal() {
        this.props.toggleMatchModal()
    }

    render() {

        let hideDisplay = {
            "display":"none"
        }
        let url = `url(http://localhost:3030/public/img/${this.state.matchType}Background.jpg)`
        console.log(url)
        let background = {
            "backgroundImage":url
        }

        return (
            <main className='matchModal' style={Object.assign({}, 
                                                !this.props.modalActive ? null : hideDisplay, 
                                                this.state.modalHeight, 
                                                this.state.modalWidth,
                                                this.state.modalLeft,
                                                this.state.modalTop)}>
                <div className='match-modal-upper-half'>
                    <div className='match-modal-close-out'>
                        <ul className='match-modal-close-out-iconX' onClick={this.toggleModal}>x</ul>
                        <ul className='match-modal-close-out-icon-minus' onClick={this.minModal}>-</ul>
                        <ul className='match-modal-close-out-icon-plus' onClick={this.maxModal}>+</ul>
                    </div>
                    <div className='scoreboard'>
                        <div className='scoreboard-player1'>12</div>
                        <div className='scoreboard-clock'>7:36</div>
                        <div className='scoreboard-player2'>17</div>
                    </div>
                </div>
                <div className='match-modal-lower-half'>
                    <div className='match-modal-background' style={background}>

                    </div>
                    <div className='match-modal-player1'>
                        Jack
                    </div>
                    <div className='match-modal-player2'>
                        Jill
                    </div>

                </div>           
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {toggleMatchModal})(MatchModal);