import {
  Obfucator as Component,
  StateProps
} from '../components/organisms/Obfucator'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  loading: state.obfucator.loading,
  visible: state.obfucator.visible
})

export const ObfucatorContainer = connect(
  mapStateToProps
)(Component)
