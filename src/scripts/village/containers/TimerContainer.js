// @flow
import Timer, {type StateProps} from '../components/Timer'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  limit: state.timer.phaseTimeLimit,
  phase: state.timer.phase
})
const TimerContainer = connect(
  mapStateToProps,
)(Timer)

export default TimerContainer
