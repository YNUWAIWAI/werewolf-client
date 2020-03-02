import Component, {StateProps} from '../components/templates/Main'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => state.main

const MainContainer = connect(
  mapStateToProps
)(Component)

export default MainContainer
