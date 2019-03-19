import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100,
    plates: [],
    value: ''
  }

  eatSushi = (price) => {
    if (this.state.money >= price) {
      this.setState((prevState)=>({
        ...this.state,
        money: prevState.money - price,
        plates: [...prevState.plates, 1]
      })
    )
    }
    else {
      null
    }
  }

  addMoney = (e) => {
    e.preventDefault()
    this.setState((prevState)=>({
      ...this.state,
      money: prevState.money + 25,
    }))
  }

  componentDidMount() {
    fetch(API)
      .then(res=> res.json())
      .then(sushis => {
        this.setState({
          ...this.state,
          sushi: [...sushis],
        })
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi} hasMoney={this.state.money}/>
        <Table plates={this.state.plates} money={this.state.money} addMoney={this.addMoney} moneyValue={this.state.value}/>
      </div>
    );
  }
}

export default App;
