import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMatchModal, setMatchFalse, updateMatch} from './../../redux/mainReducer.js';
import AdminControls from './AdminControls';

const io = require('socket.io-client');
const socket = io();

class MatchModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalHeight: null,
            modalWidth: null,
            modalLeft: null,
            modalTop: null,
            matchType: 'basketball',
            currentUser: null
        }

        socket.on('score update', (data) => {
            props.updateMatch(data);
            console.log('update listener')
        })

        socket.on('user authorized', () => {
            this.setState({
                currentUser: 'admin'
            })
            console.log('you are authorized')
        })

        this.maxModal = this.maxModal.bind(this);
        this.minModal = this.minModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    closeModal() {
        this.setState({
            currentUser: null
        })
        if (this.props.currentMatch.active) {
            socket.emit('leave room', {
                room: this.props.currentMatch.id
            })
        }
        this.props.setMatchFalse();
        this.props.toggleMatchModal();
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalActive &&
            nextProps.currentMatch.id !== this.props.currentMatch.id &&
            this.props.currentMatch.active) {
            socket.emit('leave room', {
                room: this.props.currentMatch.id
            })
        }
        if (nextProps.modalActive && nextProps.currentMatch.active) {
            socket.emit('room', {room: nextProps.currentMatch.id})
            console.log('emit from modal')
        }
        if (this.props.currentUser && nextProps.currentMatch) {
            if (nextProps.currentMatch.creator === this.props.currentUser.id) {
                socket.emit('authorize user', {match_id: nextProps.currentMatch.id})
            }
            return;
        }
    }
    
    render() { 

        let hideDisplay = {
            "display":"none"
        }
        let url = `url(http://localhost:3030/public/img/${this.state.matchType}Background.jpg)`
        let background = {
            "backgroundImage":url
        }

        let adminControls = null;
        if (this.state.currentUser === 'admin') {
            adminControls = <AdminControls />
        } else {
            adminControls = null
        }

        return (
            <main className='matchModal' style={Object.assign({}, 
                                                this.props.modalActive ? null : hideDisplay, 
                                                this.state.modalHeight, 
                                                this.state.modalWidth,
                                                this.state.modalLeft,
                                                this.state.modalTop)}>
                <div className='match-modal-upper-half'>
                    <div className='match-modal-close-out'>
                        <ul className='match-modal-close-out-iconX' onClick={this.closeModal}>x</ul>
                        <ul className='match-modal-close-out-icon-minus' onClick={this.minModal}>-</ul>
                        <ul className='match-modal-close-out-icon-plus' onClick={this.maxModal}>+</ul>
                    </div>
                    <div className='scoreboard'>
                        <div className='scoreboard-player1'>
                            {this.props.currentMatch ? 
                            this.props.currentMatch.player1_score :
                            '--'}
                        </div>
                        <div className='scoreboard-clock'>
                            {this.props.currentMatch ?
                            'Live!' :
                            '--'}
                        </div>
                        <div className='scoreboard-player2'>
                            {this.props.currentMatch ? 
                            this.props.currentMatch.player2_score :
                            '--'}
                        </div>
                    </div>
                </div>
                <div className='match-modal-lower-half'>
                    <div className='match-modal-background' style={background}>

                    </div>
                    <div className='match-modal-player1'>
                        {this.props.currentMatch ? 
                        this.props.currentMatch.player1.name :
                        '--'}
                    </div>
                    <div className='match-modal-player2'>
                        {this.props.currentMatch ?
                        this.props.currentMatch.player2.name :
                        '--'}
                    </div>

                </div>  
                {adminControls} 
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {toggleMatchModal, setMatchFalse, updateMatch})(MatchModal);