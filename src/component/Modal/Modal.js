import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import m from '../Modal/Modal.module.css';
// const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={m.Overlay}>
        <div className={m.Modal}>{this.props.children}</div>
      </div>
      // modalRoot,
    );
  }
}
