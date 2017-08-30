import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleMatchModal} from './../../redux/mainReducer.js';




class MatchModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalHeight: null,
            modalWidth: null,
            modalLeft: null,
            modalTop: null
        }

        this.maxModal = this.maxModal.bind(this);
        this.minModal = this.minModal.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }


    maxModal() {
        this.setState({
            modalHeight: {"height":"100%"},
            modalWidth: {"width":"100%"},
            modalLeft: {"left":"0%"},
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
                </div>
                <div className='match-modal-lower-half'>
                    <img src=""/>

                </div>           
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {toggleMatchModal})(MatchModal);