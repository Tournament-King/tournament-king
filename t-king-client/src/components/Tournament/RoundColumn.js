import React from 'react';
import MatchCard from './MatchCard';

function populate(data) {
    return data.matches.map((match, i, arr) => {
        return <MatchCard key={i}
                            id={match.id}
                            p1={"chez"}
                            p2={"butthead"}
                            p1score={match.player1_score}
                            p2score={match.player2_score}
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