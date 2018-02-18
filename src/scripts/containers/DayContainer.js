import Day from '../components/Day'
import Phase from '../constants/Phase'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  date: state.day.date,
  phase: Phase[state.day.phase]
})

const DayContainer = connect(
  mapStateToProps
)(Day)

export default DayContainer
