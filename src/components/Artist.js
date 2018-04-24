import React from 'react';

const Artist = (props) => {
  if(!props.artist) return null;

  return (
    <article>
      <img
        className="ArtistImage"
        src={props.artist["im:image"][2].label}
        alt={props.artist["im:image"][2].label}/>
        <h3>
          Title: {props.artist["im:name"].label}
        </h3>
        <h3>
          Artist: {props.artist["im:artist"].label}
        </h3>
        <h3>
          <audio controls preload="none">
            <source src={props.artist.link[1].attributes.href} type="audio/mp4" />
          </audio>
        </h3>
      </article>
    )
  }

export default Artist;
