import React, { Component } from 'react';

import './styles.css';

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.step || 5,
  };
  
  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  }
  
  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  }
  
  setStep = (event) => {
    this.setState({
      step: Number(event.target.value),
    });
  }

  render() {
    const { number, step } = this.state;

    return (
      <div className="counter">
        <h2>{number}</h2>

        <div>
          <label htmlFor="stepInput">Passo: </label>
          <input
            id="stepInput"
            type="number"
            value={step}
            onChange={this.setStep}
          />
        </div>

        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default Counter;