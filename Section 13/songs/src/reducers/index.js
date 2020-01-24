import { combineReducers } from 'redux';

const songsReducer = () =>
{
    return [
        {title: 'Crash Into Me', duration: '5:07'},
        {title: 'Boreal Forest', duration: '4:37'},
        {title: 'Save Me', duration: '11:13'},
        {title: 'Fly Me To The Moon', duration: '3:03'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>
{
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers(
{
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
