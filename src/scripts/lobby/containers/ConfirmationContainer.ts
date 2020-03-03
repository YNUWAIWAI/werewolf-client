import * as ActionTypes from '../constants/ActionTypes'
import Component, {
  DispatchProps, StateProps
} from '../components/organisms/Confirmation'
import {
  Confirmation,
  WaitingPage,
  confirmation,
  waitingPage
} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | Confirmation.SelectNo
  | Confirmation.SelectYes
  | WaitingPage.KickOutPlayer

const mapStateToProps = (state: ReducerState): StateProps => state.confirmation
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(confirmation.selectNo())
  },
  handleClickYes: type => {
    dispatch(confirmation.selectYes())
    switch (type) {
      case ActionTypes.WaitingPage.KICK_OUT_PLAYER:
        dispatch(waitingPage.kickOutPlayer())
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
