import { SET_ARTIST } from '../constants.js';

export default function (artist) {
  return {
    type: SET_ARTIST,
    artistQuery: artist
  };
}
