import React, { Component } from 'react';
import './style.css';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  onHandleIncrement = () => {
    const { counter } = this.state;
    const { onIncrement, number } = this.props;
    const incrementNum = number || 1;
    this.setState({ counter: counter + incrementNum });
    onIncrement(incrementNum);
  };

  onHandleDecrement = () => {
    const { counter } = this.state;
    const { onDecrement, number } = this.props;
    const decrementNum = number || 1;
    this.setState({ counter: counter - decrementNum });
    onDecrement(decrementNum);
  };
  render() {
    const { counter } = this.state;

    return (
      <div className='counter'>
        <span>{counter}</span>

        <button onClick={this.onHandleIncrement}>+</button>
        <button onClick={this.onHandleDecrement}>-</button>
      </div>
    );
  }
}
