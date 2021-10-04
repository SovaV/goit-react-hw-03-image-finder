import React, { Component } from 'react';
import Container from '../component/Container/Container';
//====================================
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';

class App extends Component {
  state = {
    total: 4692,
  };

  componentDidMount() {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => this.setState({ articles: response.data.articles }))
      .then(console.log);
  }

  render() {
    return (
      <Container>
        {/* {this.state.safesearch && <div>{this.state.safesearch}</div>} */}
        <Searchbar />
      </Container>
    );
  }
}

export default App;
