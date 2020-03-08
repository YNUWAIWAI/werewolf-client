import Component, {
  DispatchProps,
  StateProps
} from '../components/atoms/MuteButton'
import {
  ToggleMute,
  toggleMute
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | ToggleMute

const mapStateToProps = (state: ReducerState): StateProps => ({
  muted: state.audio.muted
})
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClick: muted => {
    dispatch(toggleMute(muted))
  }
})
const MuteButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default MuteButtonContainer
