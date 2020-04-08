import Component, {StateProps} from '../components/molecules/InfoDay'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  day: state.base.day,
  phase: state.base.phase
})
const Container = connect(
  mapStateToProps
)(Component)

export default Container
