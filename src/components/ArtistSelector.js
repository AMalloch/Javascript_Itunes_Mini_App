import React from 'react';

const ArtistSelector = (props) => {

  const top20options = props.artists.map((artist, index) => {
    return <option value={index} key={index}>{artist["im:name"].label}</option>
  });

  return (
    <select
      id="AmiiboSelect"
      defaultValue="default">
      <option disabled value="default">Top 20</option>
      {top20options}
    </select>
  )
}

export default ArtistSelector;
