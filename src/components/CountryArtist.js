import React from 'react';

const CountryArtist = (props) => {
  if(!props.countryArtist) return null;

  return (
    <article>
        <h3>
          Title: {props.countryArtist.name}
        </h3>
      </article>
    )
  }

export default CountryArtist;
