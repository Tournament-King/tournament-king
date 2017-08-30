import React from 'react';
import MatchCard from './MatchCard';

function populate(data) {
    return data.matches.map((match, i, arr) => {
        return <MatchCard key={i}
                            id={match.id}
                            p1={match.player1 ? match.player1.name : 'TBA'}
                            p2={match.player2 ? match.player2.name : 'TBA'}
                            p1score={match.player1_score}
                            p2score={match.player2_score}
                            toggleModal={data.toggleModal}
                />
    })
}

export default function RoundColumn(props) {
    let matches = populate(props)
    let width = 66 / props.widthDivisor + '%'
    let setHeight = {
        "height":props.height,
        "width":width
    }
    return (
        <main className="round-column" style={setHeight}>
            {matches}
        </main>
    )
}