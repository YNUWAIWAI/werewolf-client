// @flow
import FormatedTime from './FormattedTime'
import type {Phase} from 'village'
import React from 'react'

export type Props = {
  +limit: number,
  +phase: Phase | ''
}
export type State = {
  start: DOMHighResTimeStamp,
  time: number
}

export default class Timer extends React.Component<Props, State> {
  intervalID: IntervalID[]
  constructor(props: Props) {
    super(props)
    this.state = {
      start: 0,
      time: 0
    }
    this.intervalID = []
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.limit === -1) {
      return
    }
    this.setState({
      start: performance.now()
    })
    this.intervalID = [
      ... this.intervalID,
      setInterval(() => this.tick(), 200)
    ]
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (nextProps.phase !== this.props.phase) {
      if (nextProps.limit === -1) {
        return false
      }

      return true
    }
    if (nextState.time !== this.state.time) {
      return true
    }

    return false
  }

  tick() {
    const time = Math.floor((this.state.start + this.props.limit * 1000 - performance.now()) / 1000)

    this.setState({
      time
    })
    if (time < 0) {
      const [
        head,
        ... tail
      ] = this.intervalID

      clearInterval(head)
      this.intervalID = tail
    }
  }

  render() {
    return (
      <FormatedTime time={this.state.time} />
    )
  }
}
