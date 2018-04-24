import React from 'react';
import ArtistSelector from '../components/ArtistSelector'
import CountryArtistSelector from '../components/CountryArtistSelector'
import Artist from '../components/Artist'

class ItuneBox extends React.Component {
  constructor(props){
    super(props);
    this.handleArtistSelected = this.handleArtistSelected.bind(this);
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
  }

  componentDidMount(){
    fetch("https://rss.itunes.apple.com/api/v1/gb/apple-music/hot-tracks/country/25/explicit.json")
    .then(response => response.json())
    .then(json => this.setState({countryArtists: json.feed.entry}));
  }

  handleArtistSelected(index){
    const selectedArtist = this.state.artists[index];
    this.setState({currentArtist: selectedArtist});
  }

  handleCountryArtistSelected(index){
    const CountrySelectedArtist = this.state.countryArtists[index];
    this.setState({currentCountryArtist: selectedArtist});
  }

  render(){
    return (
      <div>
        <h3>Itune's Top 20</h3>
        <ArtistSelector
        artists={this.state.artists}
        onArtistSelect={this.handleArtistSelected}
        />
        <Artist artist={this.state.currentArtist}/>
        <CountryArtistSelector
          countryartist={this.handleCountryArtistSelected}
        />
        <CountryArtist countryartist={this.state.currentArtist}/>
      </div>
    )
  };
}

export default ItuneBox;
