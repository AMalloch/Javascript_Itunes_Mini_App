import React from 'react';

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
    .then(json => this.setState({artists: json}));
  }

  render(){
    return (
      <div>
        <h3>Itune's Top 20</h3>
      </div>
    )
  };
}

export default ItuneBox;
