import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadTournaments} from './../../redux/mainReducer';
import {Icon} from 'semantic-ui-react';

class TournamentSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            searchExpanded: false
        }

        this.handleSearchToggle = this.handleSearchToggle.bind(this);

    }

    handleSearchToggle() {
        this.setState({
            searchExpanded: !this.state.searchExpanded
        })
    }

    componentDidMount() {
        this.props.loadTournaments();
    }

    render() {
        const styleExpanded = {
            "height":"32px",
            "width":"100%"
        }

        return (
            <main className="landing-search-wrapper">
                <div className="landing-search-content"
                    style={this.state.searchExpanded ? styleExpanded : null}>
                    <div className="landing-search-icon"
                        onClick={this.handleSearchToggle}>
                       <Icon name="search" />
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,
    {loadTournaments}
)(TournamentSearch);
