import React from 'react';
import ArtistSelector from '../components/ArtistSelector'

class ItuneBox extends React.Component {
  constructor(props){
    super(props);
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

  render(){
    return (
      <div>
        <h3>Itune's Top 20</h3>
        <ArtistSelector
        artists={this.state.artists}/>
      </div>
    )
  };
}

export default ItuneBox;
