import {
  InfoDay as Component,
  StateProps
} from '../components/molecules/InfoDay'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  day: state.base.day,
  phase: state.base.phase
})

export const InfoDayContainer = connect(
  mapStateToProps
)(Component)
