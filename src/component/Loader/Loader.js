import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
export default class Spiner extends Component {
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
