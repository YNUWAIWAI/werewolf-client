import Result from '../components/Result'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  agents: state.result.agents,
  isVisible: state.result.isVisible,
  mine: state.mine
})
const ResultContainer = connect(
  mapStateToProps
)(Result)

export default ResultContainer
