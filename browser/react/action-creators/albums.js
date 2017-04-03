import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../constants';
import axios from 'axios';

export const getAlbums = () => dispatch => {
    axios.get('/api/albums/')
    .then(res => res.data)
}