import Component, {StateProps} from '../components/organisms/Obfucator'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.obfucator

const ObfucatorContainer = connect(
  mapStateToProps
)(Component)

export default ObfucatorContainer
