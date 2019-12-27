import React from 'react';

function ListItem (props) {
    console.log('props is', props.text);
    return (
        <ul className="txt">
            {props.text.map((item, i) => {
                return <li key={`inst${i}`}>{item}</li>
            })}
        </ul>
    )
}

export default ListItem;