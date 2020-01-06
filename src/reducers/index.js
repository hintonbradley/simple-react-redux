
// Step 2: Importing the Redux library into this file:
import { combineReducers } from 'redux';

// Step 1: Creating Reducers:
const songsReducer = () => {
    return [
        {title: 'Jump', artist: 'Van Halen', album: '1984'},
        {title: 'Big Time', artist: 'Peter Gabriel', album: 'So'},
        {title: 'Africa', artist: 'Toto', album: 'Toto IV'},
        {title: 'Fame', artist: 'Irene Cara', album: 'Fame OST'},
        {title: 'Never Tear Us Apart', artist: 'INXS', album: 'Kick'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

// Step 3: Writing up the Reducers together and adding them to the Redux State object. Any file can now get access to the combined set of Reducers:
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
