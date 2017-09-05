import React from 'react';
import {connect} from 'react-redux';
import TournamentSearch from './TournamentSearch';
import TournamentCard from './TournamentCard';


const Landing = function(props) {

    let cardList = props.tournamentList.map((obj, i) => {
        return <TournamentCard
                    key={i}/>
    })

    return (
        <main className="landing-wrapper">
            <div className="landing-splash">
                
            </div>
            <div className="landing-content">
                <TournamentSearch />
                <div className="landing-cards-wrapper">
                    {cardList}
                </div>
            </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Landing);