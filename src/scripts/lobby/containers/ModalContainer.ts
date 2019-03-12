import * as ActionTypes from '../constants/ActionTypes'
import {KickOutPlayer, SelectNo, SelectYes, kickOutPlayer, selectNo, selectYes} from '../actions'
import Modal, {DispatchProps, StateProps} from '../components/organisms/Modal'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | KickOutPlayer
  | SelectNo
  | SelectYes

const mapStateToProps = (state: ReducerState): StateProps => state.modal
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(selectNo())
  },
  handleClickYes: type => {
    dispatch(selectYes())
    switch (type) {
      case ActionTypes.global.KICK_OUT_PLAYER:
        dispatch(kickOutPlayer())

        return
      default:
        return
    }
  }
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
