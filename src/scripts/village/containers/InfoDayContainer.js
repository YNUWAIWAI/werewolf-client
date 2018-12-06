// @flow
import InfoDay, {type StateProps} from '../components/molecules/InfoDay'
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
const InfoDayContainer = connect(
  mapStateToProps
)(InfoDay)

export default InfoDayContainer
