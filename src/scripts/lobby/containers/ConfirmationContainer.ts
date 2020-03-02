import * as ActionTypes from '../constants/ActionTypes'
import Component, {
  DispatchProps, StateProps
} from '../components/organisms/Confirmation'
import {
  Confirmation,
  KickOutPlayer,
  confirmation,
  kickOutPlayer
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | KickOutPlayer
  | Confirmation.SelectNo
  | Confirmation.SelectYes

const mapStateToProps = (state: ReducerState): StateProps => state.confirmation
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(confirmation.selectNo())
  },
  handleClickYes: type => {
    dispatch(confirmation.selectYes())
    switch (type) {
      case ActionTypes.App.KICK_OUT_PLAYER:
        dispatch(kickOutPlayer())
        break
      default:
    }
  }
})
const ConfirmationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default ConfirmationContainer
