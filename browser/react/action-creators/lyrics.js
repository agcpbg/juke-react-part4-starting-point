import { SET_LYRICS } from '../constants.js';

export default function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };
}

