import React from 'react';

const Lyrics = (props) => {

  const { handleSubmit, artist, searchArtist, searchSong, text, song} = props;

  return (
    <div className="well" style={{marginTop: '20px'}}>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Get Lyrics</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Artist</label>
            <div className="col-xs-10">
              <input
                value={artist}
                onChange={searchArtist}
                className="form-control"
                type="text"
              />
            </div>
             <label className="col-xs-2 control-label">Song</label>
            <div className="col-xs-10">
              <input
                value={song}
                onChange={searchSong}
                className="form-control"
                type="text"
              />
            </div>
          </div>
          <pre>{text}</pre>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button
                type="submit"
                className="btn btn-success">
                Show Lyrics
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Lyrics;
