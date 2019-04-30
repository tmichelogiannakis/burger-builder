import React, { Component } from 'react';
import Burger from './components/burger/Burger';

class Builder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  };

  render() {
    return (
      <>
        <div>Burger</div>
        <div>Controls</div>
        <Burger ingredients={this.state.ingredients} />
      </>
    );
  }
}

export default Builder;
