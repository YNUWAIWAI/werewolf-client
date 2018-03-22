// @flow
import Obfucator, {type StateProps} from '../components/Obfucator'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  visible: state.obfucator.visible
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Obfucator)

export default ObfucatorContainer
