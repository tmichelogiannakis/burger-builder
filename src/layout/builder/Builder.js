import React, { Component } from 'react';
import Burger from './components/burger/Burger';

class Builder extends Component {
  render() {
    return (
      <>
        <div>Burger</div>
        <div>Controls</div>
        <Burger />
      </>
    );
  }
}

export default Builder;
