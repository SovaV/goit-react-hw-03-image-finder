import React, { Component } from 'react';
import Container from './component/Container/Container';
//====================================
import Searchbar from './component/Searchbar/Searchbar';
import ImageGallery from './component/ImageGallery/ImageGallery';
import Spiner from './component/Loader/Loader';
import Modal from './component/Modal/Modal';
import Button from './component/Button/Button';
import imagesAPI from './component/services/Api';

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
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, status: Status.PENDING });

      imagesAPI
        .fetchImages(nextName, nextPage)
        .then(images => {
          if (images.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              status: Status.RESOLVED,
            }));
            if (nextPage !== 1) {
              this.setState({ images: [], page: +1, status: Status.PENDING });
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
              });
            }
            return;
          }

          return Promise.reject(new Error('не верный ввод'));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

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
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log('sdfsdfsdf');
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
