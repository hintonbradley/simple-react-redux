
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    // Creating a helper function to map over the song list and return the JSX.
    renderList() {
        // This return statement will return the array of JSX elements:
        return this.props.songs.map((song) => {
            // This return statement will return each of the JSX elements in the new map array:
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                    </div>
            <div className="content"><b>{song.title}</b> - {song.artist}</div>
                </div>
            )
        })
    }

    // Adding the render and return statement for our component:
    render () {
        return (
        <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    console.log('selected song is: ', state.selectedSong);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);



