import React, { Component } from 'react';

export default class content extends Component {
  render() {
    const { name, age, address, hobbies } = this.props.data;
    return (
      <>
        <h1>About Page</h1>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>city : {address?.city}</p>
        <p>country : {address?.country}</p>
      </>
    );
  }
}
