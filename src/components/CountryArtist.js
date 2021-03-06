import React from 'react';

const CountryArtist = (props) => {
  if(!props.countryArtist) return null;

  return (
    <article>
      <img
        className="CountryArtistImage"
        src={props.countryArtist.artworkUrl100}
        alt={props.countryArtist.artworkUrl100}/>
        <h3>
          Title: <a>{props.countryArtist.name}</a>
        </h3>
        <h3>
          Artist: <a>{props.countryArtist.artistName}</a>
        </h3>
      </article>
    )
  }

export default CountryArtist;
