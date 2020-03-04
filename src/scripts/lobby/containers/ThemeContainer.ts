import Component, {StateProps} from '../components/templates/Theme'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => ({
  theme: state.theme
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Component)

export default ObfucatorContainer
