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
          {props.artist["im:name"].label}
        </h3>
      </article>
    )
  }

export default Artist;
