import React from 'react';

const CountryArtist = (props) => {
  if(!props.countryArtist) return null;

  return (
    <article>
      <img
        className="ArtistImage"
        src={props.countryArtist["im:image"][2].label}
        alt={props.countryArtist["im:image"][2].label}/>
        <h3>
          Title: {props.countryArtist["im:name"].label}
        </h3>
        <h3>
          Artist: {props.countryArtist["im:artist"].label}
        </h3>
        <h3>
          <audio controls preload="none">
            <source src={props.countryArtist.link[1].attributes.href} type="audio/mp4" />
          </audio>
        </h3>
      </article>
    )
  }

export default CountryArtist;
