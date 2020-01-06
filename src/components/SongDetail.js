import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a song</div>
    } else {
        return (
            <div>
                <h3>Details:</h3>
                <p>
                    Title: {song.title}<br></br>
                    Artist: {song.artist}<br></br>
                    Album: {song.album}
                </p>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);



