import Modal, {DispatchProps, StateProps} from '../components/organisms/Modal'
import {SelectNo, SelectYes, selectNo, selectYes} from '../actions'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectNo
  | SelectYes

const mapStateToProps = (state: ReducerState): StateProps => state.modal
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleClickNo: () => {
    dispatch(selectNo())
  },
  handleClickYes: () => {
    dispatch(selectYes())
  }
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
