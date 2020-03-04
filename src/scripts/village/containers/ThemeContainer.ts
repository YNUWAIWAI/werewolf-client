import Component, {StateProps} from '../components/organisms/Theme'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  theme: state.theme
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Component)

export default ObfucatorContainer
