import Main, {
  DispatchProps,
  StateProps
} from '../components/templates/Main'
import {
  Transition,
  transition
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Transition

const mapStateToProps = (state: ReducerState): StateProps => state.main
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  transition: target => {
    dispatch(transition(target))
  }
})
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
