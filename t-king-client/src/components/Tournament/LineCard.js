import React from 'react';


export default function LineCard(props) {



    let setHeight = {
        "height":props.height
    }

    return (
        <div className="s-elim-match-connector" style={setHeight}>
            <div className="line-connector-column-left">
                <div className="line-connector-horizontal">
                </div>
                <div className="line-connector-horizontal">
                </div>
            </div>
            <div className="line-connector-column-right">
                <div className="line-connector-horizontal">
                </div>
            </div>
        </div>

    )
}