import History from '../components/History'
import {connect} from 'react-redux'

const mapStateToProps = state => state.history
const HistoryContainer = connect(
  mapStateToProps
)(History)

export default HistoryContainer
