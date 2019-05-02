import React, { Component } from 'react';
import Burger from './components/burger/Burger';
import Controls from './components/controls/Controls';

const INGREDIENT_PRICE = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.75,
  meat: 1.5
};

class Builder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    this.setState(state => {
      const ingredients = { ...state.ingredients };
      ingredients[type] = ingredients[type] + 1;
      const totalPrice = state.totalPrice + INGREDIENT_PRICE[type];
      return { ...state, ingredients, totalPrice };
    });
  };

  removeIngredientHandler = type => {
    this.setState(state => {
      const ingredients = { ...state.ingredients };
      if (ingredients[type] > 0) {
        ingredients[type] = ingredients[type] - 1;
        const totalPrice = state.totalPrice - INGREDIENT_PRICE[type];
        return { ...state, ingredients, totalPrice };
      }
      return { ...state };
    });
  };

  render() {    
    const disabledInfo = Object.assign({}, ...Object.entries(this.state.ingredients).map(([key, value]) => ({ [key]: value < 1 })));
 
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>Total price: {this.state.totalPrice}</div>
        <Controls
          disabledInfo={disabledInfo}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </>
    );
  }
}

export default Builder;
