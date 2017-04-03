import React from 'react';
import store from '../store';
// import axios from 'axios';

import Lyrics from '../components/Lyrics';
import setArtist from '../action-creators/setArtist';
import setSong from '../action-creators/setSong';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';

export default class LyricsContainer extends React.Component {
  constructor() {
    super();
    this.state = store.getState();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      const newstate = store.getState();
      this.setState(newstate);
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  searchArtist (event) {
    store.dispatch(setArtist(event.target.value));
  }

  searchSong (event) {
    store.dispatch(setSong(event.target.value));
  }

  handleSubmit (event) {
    event.preventDefault();
    // axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    // .then(res => res.data)
    // .then(lyricsObj => {
    //   console.log(lyricsObj);
    //   store.dispatch(setLyrics(lyricsObj.lyric))
    // });
    store.dispatch(fetchLyrics(this.state.lyrics.artistQuery, this.state.lyrics.songQuery))
    store.dispatch(setArtist(''));
    store.dispatch(setSong(''));
  }

  render () {
    const text = this.state.lyrics.lyrics;


    return (
      <Lyrics artist={this.state.lyrics.artistQuery}
              song={this.state.lyrics.songQuery}
              handleSubmit={this.handleSubmit}
              text={text}
              searchArtist={this.searchArtist}
              searchSong={this.searchSong}
      />
    );
  }

}
