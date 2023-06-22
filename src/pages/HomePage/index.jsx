import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contant from '../../components/HomePageComponents/Contant';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Contant />
        <Footer />
      </>
    );
  }
}
