import React from 'react';
// import songsListProps from '../img/songsListProps.jpg';
// import songsListProps from '../../src/img/songsListProps.jpg';

class Instruction extends React.Component {

    render () {
        return (
            <div className={`card card-${ this.props.card }`}>
                {this.props.obj.map((item, i) => {
                    if(item.type==='text') {
                        return (
                            <div key={`inst${i}`} className="txt">
                                <p>{item.text}</p>
                            </div>
                        )
                    } else if (item.type==='image') {
                        return (
                            <img key={`inst${i}`} className={item.classes} src={require(`../img/${item.name}.jpg`)} alt="Connect Instance 1" />
                        )
                    } else if (item.type==='header') {
                        return (
                            <h3 key={`inst${i}`}>Header {item.text}</h3>
                        )
                    }
                })}
            </div>
        )
    }
}

export default Instruction;