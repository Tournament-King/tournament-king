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
                <h2>Welcome to Tournament King!</h2><br />
                <div className="landing-svg">
                    <svg height="172" width="172" transform="scale(1.6)" className="landing-path">
                        <path d="m 128.15675,76.842188 c 18.17934,19.200353 -7.95594,45.596422 -7.95594,45.596422 0,0 -8.21673,-0.91715 -7.94711,-10.65876 0,0 -0.71824,-4.74042 6.83107,-5.34817 0,0 -7.48522,-0.75139 -7.48522,-10.15267 0,0 -2.05087,8.67419 -9.70847,8.05982 0,0 6.05978,1.78566 5.00341,6.18353 -0.80665,3.39233 -2.91939,7.65318 -10.879762,7.36147 C 87.992481,84.656696 115.18193,63.434206 115.18193,63.434206 105.29667,61.241901 93.214676,49.354391 86.012334,36.934272 78.812201,49.354391 66.732421,61.241901 56.836106,63.434206 c 0,0 27.202711,21.22249 19.176044,54.449624 -7.969208,0.29392 -10.073114,-3.96914 -10.884178,-7.36147 -1.056373,-4.39787 5.003407,-6.18353 5.003407,-6.18353 -7.67307,0.61437 -9.706256,-8.05982 -9.706256,-8.05982 0,9.40128 -7.491851,10.15267 -7.491851,10.15267 7.55815,0.60775 6.826645,5.34817 6.826645,5.34817 0.298348,9.74161 -7.933848,10.65876 -7.933848,10.65876 0,0 -26.135287,-26.396069 -7.955947,-45.596422 0,0 -19.65561,0.917144 -43.583122,-20.641263 0,0 43.84832,66.836585 44.305787,80.551755 h 82.845723 c 0.4641,-13.71517 44.29695,-80.551755 44.29695,-80.551755 -23.92089,21.558407 -43.57871,20.641263 -43.57871,20.641263 z" />                    
                    </svg>
                </div>
                {/* <h3>Create tournament brackets for any competition.</h3> */}
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

