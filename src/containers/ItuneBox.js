import React from 'react';
import ArtistSelector from '../components/ArtistSelector'
import Artist from '../components/Artist'
import CountryArtistSelector from '../components/CountryArtistSelector'
import CountryArtist from '../components/CountryArtist'

class ItuneBox extends React.Component {
  constructor(props){
    super(props);
    this.handleArtistSelected = this.handleArtistSelected.bind(this);
    this.handleCountryArtistSelected = this.handleCountryArtistSelected.bind(this);
    this.state = {
      countryArtists: [],
      currentCountryArtist: null,
      artists: [],
      currentArtist: null
    };
  };

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({artists: json.feed.entry}));
    fetch("https://rss.itunes.apple.com/api/v1/gb/apple-music/hot-tracks/country/25/explicit.json")
    .then(response => response.json())
    .then(json => this.setState({countryArtists: json.feed.results}));
  }

  handleArtistSelected(index){
    const selectedArtist = this.state.artists[index];
    this.setState({currentArtist: selectedArtist});
  }

  handleCountryArtistSelected(index){
    const CountrySelectedArtist = this.state.countryArtists[index];
    this.setState({currentCountryArtist: CountrySelectedArtist});
  }

  render(){
    return (
      <div className='itune-box'>
        <h1>iTunes</h1>
        <h2>Top 20</h2>
        <ArtistSelector
        artists={this.state.artists}
        onArtistSelect={this.handleArtistSelected}
        />
        <Artist artist={this.state.currentArtist}/>
        <h2>Hottest Country Tracks</h2>
        <CountryArtistSelector
          countryartists={this.state.countryArtists}
          onCountryArtistSelect={this.handleCountryArtistSelected}
        />
        <CountryArtist countryArtist={this.state.currentCountryArtist}/>
      </div>
    )
  };
}

export default ItuneBox;
