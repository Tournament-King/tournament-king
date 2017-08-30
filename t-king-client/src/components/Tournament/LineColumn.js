import React from 'react';
import LineCard from './LineCard';

function populate(data) {
    let count = data.cardCount
    let augmentor = 0
    let cards = [];
    for (let i = count; i > 0; i--) {
        let height = 100 / (count + i + augmentor) + '%'
        cards.push(<LineCard 
                    key={i}
                    height={height}
                    />
        )
        augmentor++;
    }
    return cards
}

export default function LineColumn(props) {
    let width = 30 / props.widthDivisor + '%'
    let setHeight = {
        "height":props.height,
        "width":width
    }

    let cards = populate(props)

    return (
        <main className="line-column" style={setHeight}>
            {cards}
        </main>
    )
}