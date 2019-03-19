import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    first: 0,
    second: 4
  }

  renderSushi = () => {
    return this.props.sushi.slice(this.state.first, this.state.second).map(sush => {
      return <Sushi sushi={sush} eatSushi={this.props.eatSushi} />
    })
  }

  moreSushi = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      first: prevState.first + 4,
      second: prevState.second + 8
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton moreSushi={this.moreSushi}/>
        </div>
      </Fragment>
    )
  }
}
export default SushiContainer
