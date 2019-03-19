import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100,
    plates: []
  }

  eatSushi = () => {
    this.setState((prevState)=>({
      ...this.state,
      plates: [...prevState.plates, 1]
      })
    )
  }

  componentDidMount() {
    fetch(API)
      .then(res=> res.json())
      .then(sushis => {
        this.setState({
          sushi: [...sushis]
        })
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi} />
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
