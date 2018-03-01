import FormatedTime from './FormattedTime'
import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (this.props.phase !== prevProps.phase) {
      this.start()
    }
  }

  start() {
    this.setState({
      intervalID: setInterval(this.tick, 1000)
    })
  }

  tick() {
    const now = new Date()
    const time = Math.floor((this.props.start + this.props.limit - now) / 1000)

    if (time >= 0) {
      this.setState({
        time
      })
    } else {
      this.end()
    }
  }

  end() {
    clearInterval(this.state.intervalID)
  }

  render() {
    return (
      <FormatedTime id={this.props.id} time={this.state.time} />
    )
  }
}
