import React, { Component } from 'react';
import Counter from './components/Counter';

export default class App extends Component {
  state = {
    counters: [0, 0, 0, 0],
  };

  render() {
    const { counters } = this.state;
    const IncDecNumbers = [1, 2, 3, 4];
    const onIncrenmentHandler = (index, incrementNum) => {
      const { counters } = this.state;
      const updatedCounters = [...counters];
      updatedCounters[index] += incrementNum;
      this.setState({ counters: updatedCounters });
    };

    const onDecrementHandler = (index, decrementNum) => {
      const { counters } = this.state;
      const updatedCounters = [...counters];
      updatedCounters[index] -= decrementNum;
      this.setState({ counters: updatedCounters });
    };
    return (
      <div>
        {counters.map((counter, index) => (
          <Counter
            key={index}
            onIncrement={(incrementNum) =>
              onIncrenmentHandler(index, incrementNum)
            }
            onDecrement={(decrementNum) =>
              onDecrementHandler(index, decrementNum)
            }
            number={IncDecNumbers[index]}
          />
        ))}

        <h1>Total : {counters.reduce((acc, counter) => acc + counter, 0)}</h1>
      </div>
    );
  }
}
