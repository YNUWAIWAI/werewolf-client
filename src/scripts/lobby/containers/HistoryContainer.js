import History from '../components/History'
import {connect} from 'react-redux'
import {selectVillage} from '../actions'

const mapStateToProps = state => state.history
const mapDispatchToProps = dispatch => ({
  selectVillage: id => () => dispatch(selectVillage(id))
})
const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default HistoryContainer
