import Timer from '../components/Timer'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  limit: state.timer.phaseTimeLimit === -1 ? -1 : state.timer.phaseTimeLimit
})
const TimerContainer = connect(
  mapStateToProps,
)(Timer)

export default TimerContainer
