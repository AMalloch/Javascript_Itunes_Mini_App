import React from 'react';

const CountryArtistSelector = (props) => {

  const countryOptions = props.countryArtists.map((countryArtist, index) => {
    return <option value={index} key={index}>{countryArtist["im:name"].label}</option>
  });

  const handleChange = (event) => {
    let index = event.target.value;
    props.onCountryArtistSelect(index);
  }

  return (
    <select
      id="countryArtistSelector"
      defaultValue="default"
      onChange={handleChange}>
      <option disabled value="default">Top 20</option>
      {countryOptions}
    </select>
  );
}

export default CountryArtistSelector;
