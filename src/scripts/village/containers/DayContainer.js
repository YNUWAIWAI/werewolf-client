// @flow
import Day, {type StateProps} from '../components/molecules/Day'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  date: state.base.date,
  phase: state.base.phase,
  timer: {
    limit: state.base.phaseTimeLimit,
    phase: state.base.phase
  }
})
const DayContainer = connect(
  mapStateToProps
)(Day)

export default DayContainer
