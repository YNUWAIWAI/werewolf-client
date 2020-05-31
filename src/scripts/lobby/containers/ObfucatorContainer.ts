import {
  Obfucator as Component,
  StateProps
} from '../components/organisms/Obfucator'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.obfucator

export const ObfucatorContainer = connect(
  mapStateToProps
)(Component)
