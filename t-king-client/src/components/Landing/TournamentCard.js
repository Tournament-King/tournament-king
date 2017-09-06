import React from 'react';

const TournamentCard = (props) => {
    return (
        <main className="tournament-card-wrapper">
            <div className="t-card-d1">
                <div className="t-card-d2">
                    <div className="color">
                        <h5 className="t-card-name">{props.name}</h5>
                        <p className="t-card-type">{props.type}</p>
                    </div>
                    <div className="white">
                        <img src={`/public/img/icons/${props.type}.png`} />
                    </div>
                </div>
            </div>
            </main>
    )
}

export default TournamentCard;