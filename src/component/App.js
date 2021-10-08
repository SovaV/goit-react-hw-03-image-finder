import React, { Component } from 'react';
import Container from '../component/Container/Container';
//====================================
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spiner from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

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
    per_page: 12,
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
    const { page, text, per_page } = this.state;

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
          page: page + 1,
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleFormSubmit = text => {
    this.setState({ text, page: 1 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  openModal = ({ largeImageURL, showModal }) => {
    this.setState({ largeImageURL, showModal: !showModal });
  };

  btnFetch = () => {
    this.fetchImg();
  };
  render() {
    const { images, error, status, showModal, largeImageURL } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.IDLE && <h2>Введи и будет чудо</h2>}
        {status === Status.REJECTED && <h1>{error.message}</h1>}
        {status === Status.RESOLVED && <ImageGallery images={images} openModal={this.openModal} />}
        {status === Status.PENDING && <Spiner />}
        {images.length !== 0 && <Button onClick={this.btnFetch} />}
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
