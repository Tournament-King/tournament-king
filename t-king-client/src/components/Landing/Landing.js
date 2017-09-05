import React from 'react';
import {connect} from 'react-redux';
import {loadTournaments} from './../../redux/mainReducer';
import TournamentSearch from './TournamentSearch';
import TournamentCard from './TournamentCard';


const Landing = function(props) {

    let cardList = props.tournamentList.map((obj, i) => {
        return <TournamentCard
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    desc={obj.description}
                    type={obj.type}
                    />
    })

    return (
        <main className="landing-wrapper">
            <div className="landing-splash">
                
            </div>
            <div className="landing-content">
                <TournamentSearch />
            <div className="tournament-divider"></div>
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

export default connect(mapStateToProps, {loadTournaments})(Landing);

