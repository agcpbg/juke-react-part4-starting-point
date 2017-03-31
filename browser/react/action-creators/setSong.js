import { SET_SONG } from '../constants.js';

export default function (song) {
  return {
    type: SET_SONG,
    songQuery: song
  };
}
