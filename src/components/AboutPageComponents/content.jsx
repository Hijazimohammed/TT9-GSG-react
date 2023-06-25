import React, { Component } from 'react';

export default class content extends Component {
  render() {
    const { name, age, address, hobbies } = this.props.data;
    return (
      <section style={{ margin: '0 10rem' }}>
        <h1>About Page</h1>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>city : {address?.city}</p>
        <p>country : {address?.country}</p>
        <p>hobbies : {hobbies?.join(', ')}</p>
      </section>
    );
  }
}
