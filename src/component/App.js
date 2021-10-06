import React, { Component } from 'react';
import Container from '../component/Container/Container';
//====================================
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spiner from './Loader/Loader';
import Modal from './Modal/Modal';

const Status = {
  IDLE: 'idle', // стоїть на місці
  PENDING: 'pending', // очікується
  RESOLVED: 'resolved', // виконалось
  REJECTED: 'rejected', // відхилено
};

class App extends Component {
  state = {
    text: '',
    page: 1,
    images: [],
    loading: false,
    error: null,
    status: Status.IDLE,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.text;
    const nextName = this.state.text;
    const API_KEY = '22963284-23f543f8627e95ac39317c785';
    const per_page = 12;
    if (prevName !== nextName) {
      const { page } = this.state;
      this.setState({ status: Status.PENDING });

      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nextName}&page=${page}&per_page=${per_page}&key=${API_KEY}`,
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нет такой картинки ${nextName}`));
        })
        .then(images => {
          this.setState(state => ({
            images: [...state.images, ...images.hits],
            page: page + 1,
            status: Status.RESOLVED,
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  handleFormSubmit = text => {
    this.setState({ text });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status, showModal, largeImageURL } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <h2>Введи и будет чудо</h2>}
        {status === Status.REJECTED && <h1>{error.message}</h1>}
        {status === Status.PENDING && <Spiner />}
        {status === Status.RESOLVED && <ImageGallery images={images} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
