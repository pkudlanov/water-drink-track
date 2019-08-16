import React, { Component } from 'react';

export default class DrinkForm extends Component{
  state = {
    water: 0,
    inputBox: 0
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => {
      return{ water: state.water + state.inputBox };
    });
  }

  handleInput = target => {
    this.setState({ inputBox: target.value });
  }

  render(){
    const { water, inputBox } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <input name="number" type="number" onChange={this.handleInput} value={inputBox} placeholder="oz of H2O"/>
        <div>oz</div>
        <button>Add Water Drunk</button>

        <h1>{water} oz today! YEE-haWW</h1>
      </form>
    );
  }
}
