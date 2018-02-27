import Day from '../components/Day'
import Phase from '../constants/Phase'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  date: state.base.date,
  phase: Phase[state.base.phase],
  phaseTimeLimit: state.base.phaseTimeLimit
})
const DayContainer = connect(
  mapStateToProps
)(Day)

export default DayContainer
