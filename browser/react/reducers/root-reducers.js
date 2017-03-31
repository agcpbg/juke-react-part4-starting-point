import { SET_LYRICS, SET_ARTIST, SET_SONG } from '../constants.js';

const initialState = {
  lyric: '',
  artistQuery: '',
  songQuery: '',
};

export default function (prevState = initialState, action) {

  const newState = Object.assign({}, prevState);

  switch (action.type) {

    case SET_LYRICS:
      newState.lyric = action.lyric;
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
