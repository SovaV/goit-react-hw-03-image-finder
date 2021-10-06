import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default class Spiner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Watch"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000} //3 secs
      />
    );
  }
}
