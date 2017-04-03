import { SET_LYRICS } from '../constants.js';
import axios from 'axios';

export const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyrics: text
  };
}

export const fetchLyrics = function (artist, song) {
    return function(dispatch, getState) {
      axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => res.data)
      .then(lyricsObj => {
        console.log('lyricsobj', lyricsObj)
        dispatch(setLyrics(lyricsObj.lyric))
      });
    }
}