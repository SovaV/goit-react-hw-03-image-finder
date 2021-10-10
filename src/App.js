import React, { Component } from 'react';
import Container from './component/Container/Container';
//====================================
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/ImageGallery/ImageGallery';
import Spiner from './component/Loader/Loader';
import Modal from './component/Modal/Modal';
import Button from './component/Button/Button';

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
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.text;
    const nextName = this.state.text;
    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, status: Status.PENDING });
      this.fetchImg();
    }
  }
  fetchImg = () => {
    const API_KEY = '22963284-23f543f8627e95ac39317c785';
    const { page, text } = this.state;
    const per_page = 12;

    fetch(
      `https://pixabay.com/api/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Нет такой картинки ${text}`));
      })
      .then(({ hits }) => {
        this.setState(({ images }) => ({
          images: [...images, ...hits],
          status: Status.RESOLVED,
          page: page + 1,
        }));

        if (page !== 1) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  handleFormSubmit = text => {
    this.setState({ text, page: 1 });
  };
  openModal = e => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  btnFetch = () => {
    this.fetchImg();
  };

  render() {
    const { images, error, status, showModal, largeImageURL } = this.state;
    const resolvedImg = status === Status.RESOLVED && images.length > 11;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <h2>Введи и будет чудо</h2>}
        {status === Status.REJECTED && <h1>{error.message}</h1>}
        {resolvedImg && <ImageGallery images={images} openModal={this.openModal} />}
        {status === Status.PENDING && <Spiner />}
        {images.length !== 0 && <Button onClick={this.btnFetch} />}
        {showModal && <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />}
      </Container>
    );
  }
}

export default App;
