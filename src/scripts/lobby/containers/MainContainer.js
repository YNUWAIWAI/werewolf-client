// @flow
import Main, {type StateProps} from '../components/templates/Main'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.main
const MainContainer = connect(
  mapStateToProps
)(Main)

export default MainContainer
