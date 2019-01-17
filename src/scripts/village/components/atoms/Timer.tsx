import * as React from 'react'
import FormatedTime from './FormattedTime'

export interface Props {
  readonly limit: number
  readonly phase: village.Phase
}
export interface State {
  start: DOMHighResTimeStamp
  time: number
}

export default class Timer extends React.Component<Props, State> {
  intervalID: NodeJS.Timeout[]
  constructor(props: Props) {
    super(props)
    this.state = {
      start: -1,
      time: 0
    }
    this.intervalID = []
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

  componentDidUpdate(prevProps: Props) {
    if (this.props.phase !== prevProps.phase && this.props.limit !== -1) {
      this.intervalID = [
        ... this.intervalID,
        setInterval(() => this.tick(), 200)
      ]
    }
  }

  tick() {
    if (this.state.start === -1) {
      this.setState({
        start: performance.now()
      })
    }

    this.setState((prevState, prevProps) => ({
      time: Math.floor((prevState.start + prevProps.limit * 1000 - performance.now()) / 1000)
    }))
    if (this.state.time < 0) {
      const [
        head,
        ... tail
      ] = this.intervalID

      clearInterval(head)
      this.intervalID = tail
      this.setState({
        start: -1
      })
    }
  }

  render() {
    return (
      <FormatedTime time={this.state.time} />
    )
  }
}
