import { SET_LYRICS, SET_ARTIST, SET_SONG } from '../constants.js';

const initialState = {
  lyrics: '',
  artistQuery: '',
  songQuery: '',
};

export default function (prevState = initialState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {

    case SET_LYRICS:
      newState.lyrics = action.lyrics;
      return newState;

    case SET_ARTIST:
      newState.artistQuery = action.artistQuery;
      return newState;

    case SET_SONG:
      newState.songQuery = action.songQuery;
      return newState;

    default:
      return newState;
  }
}
