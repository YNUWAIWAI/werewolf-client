// @flow
import FormatedTime from './FormattedTime'
import React from 'react'

type Props = {
  id: string,
  limit: number
}

type State = {
  intervalID?: IntervalID,
  time: number
}

export default class Timer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      time: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      intervalID: setInterval(this.tick, 1000),
      time: nextProps.limit
    })
  }
  tick() {
    if (this.state.time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1
      }))
    } else {
      clearInterval(this.state.intervalID)
    }
  }

  render() {
    return (
      <FormatedTime id={this.props.id} time={this.state.time} />
    )
  }
}
