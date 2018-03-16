import Result from '../components/Result'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  agents: state.result.agents,
  visible: state.result.visible
})
const ResultContainer = connect(
  mapStateToProps
)(Result)

export default ResultContainer
