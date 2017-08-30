import React from 'react';

export default function MatchCard(props) {

    return (
        <main className="match-wrapper">
            <div className="match-player">
                {props.p1}
            </div>
            <div className="match-data">
            </div>
            <div className="match-player">
                {props.p2}
            </div>
        </main>
    )
}

