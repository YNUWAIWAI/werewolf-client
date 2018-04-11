// @flow
import Day, {type StateProps} from '../components/Day'
import Phase from '../constants/Phase'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  date: state.base.date,
  phase: Phase[state.base.phase],
  timer: {
    limit: state.timer.phaseTimeLimit,
    phase: state.timer.phase
  }
})
const DayContainer = connect(
  mapStateToProps
)(Day)

export default DayContainer
