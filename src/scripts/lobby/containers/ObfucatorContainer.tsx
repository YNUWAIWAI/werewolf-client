import Obfucator, {StateProps} from '../components/organisms/Obfucator'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  loading: state.obfucator.loading,
  visible: state.obfucator.visible
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Obfucator)

export default ObfucatorContainer
