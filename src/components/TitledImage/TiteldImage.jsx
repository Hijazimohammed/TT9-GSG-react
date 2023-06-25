import React, { Component } from 'react';
import './style.css';

export default class TiteldImage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { title, background, src, variant, desc } = this.props;
    return (
      <div className={`image__container ${background ? 'background' : ''} `}>
        <h2>{title}</h2>
        <img
          src={src}
          alt={title}
          title={title}
          className={variant ? 'circle' : ''}
        />
        <p>{desc}</p>
      </div>
    );
  }
}
