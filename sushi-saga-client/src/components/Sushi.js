import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    if (this.state.eaten === false) {
      if (this.props.hasMoney >= this.props.sushi.price) {
        this.setState({
          eaten: true
        })
        this.props.eatSushi(this.props.sushi.price)
      } else {
        alert("You do not have enough money")
        null
      }
    } else {
      null
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatSushi}>
          {
            this.state.eaten === true ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - {this.props.sushi.id} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}
export default Sushi
