import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contant from '../../components/AboutPageComponents/content';
const data = {
  name: 'Moahmmed',
  age: 25,
  address: {
    city: 'Cairo',
    country: 'Egypt',
  },
  hobbies: ['swimming', 'football'],
};
export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <Contant data={data} />
        <Footer />
      </>
    );
  }
}
