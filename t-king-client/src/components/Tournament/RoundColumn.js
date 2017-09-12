import React from 'react';
import MatchCard from './MatchCard';

function populate(data) {
    return data.matches.map((match, i, arr) => {
        return <MatchCard key={i}
                            index={i}
                            match={match}
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
