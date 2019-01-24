import InfoDay, {StateProps} from '../components/molecules/InfoDay'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  date: state.base.date,
  phase: state.base.phase
})
const InfoDayContainer = connect(
  mapStateToProps
)(InfoDay)

export default InfoDayContainer
