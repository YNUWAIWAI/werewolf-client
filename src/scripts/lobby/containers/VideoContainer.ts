import Component, {StateProps} from '../components/templates/Video'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {lobby} from '../types'

const mapStateToProps = (state: ReducerState): StateProps => ({
  visible: state.theme === lobby.Theme.dark
})

const ObfucatorContainer = connect(
  mapStateToProps
)(Component)

export default ObfucatorContainer
