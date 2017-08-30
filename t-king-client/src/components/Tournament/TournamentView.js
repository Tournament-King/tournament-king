import React from 'react';
import {connect} from 'react-redux';
import RoundColumn from './RoundColumn';
import LineColumn from './LineColumn';


const makeTree = function(data) {
    let columnHeight = data.rounds[0].length * 124
    let tree = [];
    let columnCount = data.rounds.length;
    let i1 = columnCount + 1;
    let i2 = data.rounds[0].length / 2
    for(let i = 0; i < columnCount; i++) {
            tree.push(<RoundColumn 
                key={i} 
                matchCount={data.rounds[i].length}
                matches={data.rounds[i]}
                widthDivisor={columnCount}
                round={i}
                height={columnHeight}/>
            )
            if(i !== columnCount - 1) {
                tree.push(<LineColumn
                    key={i1} 
                    cardCount={i2}
                    height={columnHeight}
                    widthDivisor={columnCount-1}/>
                )
            }
            i1++;
            i2 /= 2;
    }
        return tree;
}


const TournamentView = function(props) {
    let width = props.dummyData.rounds.length * 248;
    let setWidth = {
        "width":width
    }
    let tree = makeTree(props.dummyData)

    return (
        <main>
            <div className="tournament-top-section">
                    {props.dummyData.name}
            </div>
            <div className="tournament-divider"></div>
                <div className="tournament-wrapper">
                    <div className="bracket-container" style={setWidth}>
                        {tree}
                    </div>
                </div>
        </main>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(TournamentView);