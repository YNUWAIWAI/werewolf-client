import Obfucator from '../components/Obfucator'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  visible: state.obfucator.visible
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Obfucator)

export default ObfucatorContainer
