import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMatchModal, updateMatch} from './../../redux/mainReducer.js';
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
            currentUser: null,
            lastRoom: 0
        }

        // socket.on('score update', (data) => {
        //     props.updateMatch(data);
        //     console.log('update listener', data)
        // })

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
        // socket.emit('leave room', {room: 'm' + this.props.activeMatch.id})
        // this.setState({lastRoom: this.props.activeMatch.id});
        this.props.toggleMatchModal();
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.matchType !== nextProps.tournamentData.type) {
            this.setState({
                matchType: this.props.tournamentData.type
            })
        }
        // if (!this.props.activeMatch &&
        //     nextProps.modalActive) {
        //         if (nextProps.activeMatch.status === 'ready' || 
        //             nextProps.activeMatch.status === 'active')
        //         socket.emit('room', {room: 'm' + nextProps.activeMatch.id})
        // }
        // if (this.props.activeMatch) {
        //     if (nextProps.modalActive &&
        //         this.props.activeMatch.id !== nextProps.activeMatch.id) {
        //         if (this.state.lastRoom !== this.props.activeMatch.id) {
        //             socket.emit('leave room', {room: 'm' + this.props.activeMatch.id})
        //         }
        //         socket.emit('room', {room: 'm' + nextProps.activeMatch.id});
        //         console.log('state ', this.state.lastRoom)
        //     }
        // }
        if (this.props.currentUser && nextProps.activeMatch) {
            if (nextProps.tournamentData.creator === this.props.currentUser.id) {
                socket.emit('authorize user', {match_id: nextProps.activeMatch.id})
            }
            return;
        }
    }
    
    render() { 

        let match = matchData(this.props)

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
                            {match ? match.status === 'active' ?
                            match.player1_score :
                            '--' : '--'}
                        </div>
                        <div className='scoreboard-clock'>
                            {match ? match.status : '--'}
                            </div>
                        <div className='scoreboard-player2'>
                            {match ? match.status === 'active' ?
                            match.player2_score :
                            '--' : '--'}
                        </div>
                    </div>
                </div>
                <div className='match-modal-lower-half'>
                    <div className='match-modal-background' style={background}>

                    </div>
                    <div className='match-modal-player1'>
                        {this.props.activeMatch ? 
                        match.player1.name :
                        '--'}
                    </div>
                    <div className='match-modal-player2'>
                        {this.props.activeMatch ?
                        match.player2.name :
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

export default connect(mapStateToProps,
    {toggleMatchModal, updateMatch}
)(MatchModal);


const matchData = (props) => {
    let match;
    if(props.activeMatch) {
        let matchID = props.activeMatch.id;
        let round = props.activeMatch.round;
        match = props.tournamentData.rounds[round].find(m => {
            return m.id === matchID
        })
    }
    return match;
}