import Timer, {Props as StateProps} from '../components/atoms/FormattedTime'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const start = new Date(state.base.phaseStartTime).getTime()
  const timeLimit = state.base.phaseTimeLimit * 1000
  const end = start + timeLimit
  const now = state.timer.start + state.timer.time
  const rest = end - now

  if (Number.isNaN(rest)) {
    return {
      time: 0
    }
  }

  return {
    time: Math.floor(rest / 1000)
  }
}

const TimerContainer = connect(
  mapStateToProps
)(Timer)

export default TimerContainer
