import React from 'react';
import ArtistSelector from '../components/ArtistSelector'
import Artist from '../components/Artist'

class ItuneBox extends React.Component {
  constructor(props){
    super(props);
    this.handleArtistSelected = this.handleArtistSelected.bind(this);
    this.state = {
      artists: [],
      currentArtist: null
    };
  };

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({artists: json.feed.entry}));
  }

  handleArtistSelected(index){
    const selectedArtist = this.state.artists[index];
    this.setState({currentArtist: selectedArtist});
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
      </div>
    )
  };
}

export default ItuneBox;
