import React from 'react';

const CountryArtistSelector = (props) => {

  const countryOptions = props.countryartists.map((countryArtist, index) => {
    return <option value={index} key={index}>{countryArtist.name}</option>
  });

  const handleCountryChange = (event) => {
    let index = event.target.value;
    props.onCountryArtistSelect(index);
  }

  return (
    <select
      id="countryArtistSelector"
      defaultValue="default"
      onChange={handleCountryChange}>
      <option disabled value="default">Hottest Country Tracks</option>
      {countryOptions}
    </select>
  );
}

export default CountryArtistSelector;
