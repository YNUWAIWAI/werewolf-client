import Day from '../components/Day'
import Phase from '../constants/Phase'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  date: state.game.date,
  phase: Phase[state.game.phase]
})
const DayContainer = connect(
  mapStateToProps
)(Day)

export default DayContainer
