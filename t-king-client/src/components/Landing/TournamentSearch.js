import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

class TournamentSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }

    }

    render() {

        return (
            <main className="landing-search-wrapper">
                <div className="landing-search-content">
                    <div className="landing-search-icon">
                       <Icon name="search" />
                    </div>
                </div>
            </main>
        )
    }
}

export default TournamentSearch;