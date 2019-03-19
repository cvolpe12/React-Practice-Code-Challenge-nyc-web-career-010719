import React from "react"

class Wallet extends React.Component {



  render() {
    return (
      <div className="">
        <button onClick={this.props.addMoney}>Add $25 to Wallet</button>
      </div>
    )
  }
}
export default Wallet
