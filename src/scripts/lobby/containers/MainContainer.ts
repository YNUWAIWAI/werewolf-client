import {
  Main as Component,
  StateProps
} from '../components/templates/Main'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.main

export const MainContainer = connect(
  mapStateToProps
)(Component)
