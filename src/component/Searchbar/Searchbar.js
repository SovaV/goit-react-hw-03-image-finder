import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    text: '',
  };

  hendleChange = e => {
    this.setState({ text: e.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.text.trim() === '') {
      alert('Введите имя картинки');
      return;
    }
    this.props.onSubmit(this.state.text);
    // this.reset();
  };

  // reset = () => {
  //   this.setState({ text: '' });
  // };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.lable}></span>
          </button>
          <input
            onChange={this.hendleChange}
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
