import React from 'react';
import {Link} from 'react-router-dom';

const TournamentCard = (props) => {
    return (
        <Link to={`/tournament/${props.id}`}>
        <main className="tournament-card-wrapper">
                <div className="t-card-d1">
                    <div className="t-card-d2">
                        <div className="color">
                            <h5 className="t-card-name">{props.name}</h5>
                            <p className="t-card-type">{props.type}</p>
                            <p className="t-card-desc">{props.desc}</p>
                        </div>
                        <div className="white">
                            <img alt="type" src={`/public/img/icons/${props.type}.png`} />
                        </div>
                    </div>
                </div>
            </main>
        </Link>
    )
}

export default TournamentCard;