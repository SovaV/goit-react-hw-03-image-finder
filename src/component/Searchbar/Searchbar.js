import React from 'react';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={s.Searchbar}>
    <form className={s.SearchForm}>
      <button type="submit" className={s.button}>
        <span className={s.lable}></span>
      </button>

      <input
        className={s.input}
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
