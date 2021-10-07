import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import m from '../Modal/Modal.module.css';
// const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleKeyClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={m.Overlay} onClick={this.handleKeyClick}>
        <div className={m.Modal}>{this.props.children}</div>
      </div>
      // modalRoot,
    );
  }
}
