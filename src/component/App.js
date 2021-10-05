import React, { Component } from 'react';
import Container from '../component/Container/Container';
//====================================
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    text: '',
    // page: 1,
    images: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.text;
    const nextName = this.state.text;
    const API_KEY = '22963284-23f543f8627e95ac39317c785';

    if (prevName !== nextName) {
      console.log('изменилось имя');

      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nextName}&per_page=12&key=${API_KEY}`,
        )
          .then(res => res.json())
          .then(images => this.setState({ images }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }
  // fetchContent() {
  //   const API_KEY = '22963284-23f543f8627e95ac39317c785';
  //   const BASE_URL = 'https://pixabay.com/api';
  //   const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.state.text}&page=${this.state.page}&per_page=12&key=${API_KEY}`;
  //   return fetch(url).then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }

  //     return Promise.reject(new Error(`Нет покемона с именем ${this.state.text}`));
  //   });
  // }
  handleFormSubmit = text => {
    this.setState({ text });
  };
  render() {
    const { loading, images, text } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery images={this.state.images} /> */}
        {loading && <div>Загружаем...</div>}
        {!images && <div>Введите картинку</div>}
        {images && (
          <div>
            <p>{text}</p>
            <li>
              <img src={this.webformatURL} width="600" alt={this.tags} />
            </li>
          </div>
        )}
      </Container>
    );
  }
}

export default App;
