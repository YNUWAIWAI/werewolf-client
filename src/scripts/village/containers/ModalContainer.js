// @flow
import {HUNTER, SEER, WEREWOLF} from '../constants/Role'
import Modal, {type DispatchProps, type StateProps} from '../components/Modal'
import {type SelectNo, type SelectYes, selectNo, selectYes} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectNo
  | SelectYes

const getText = (phase: Phase, myRole: Role) => {
  if (phase === DAY_VOTE) {
    return '投票先はこちらでいいですか？'
  }

  switch (myRole['@id']) {
    case WEREWOLF:
      return '襲撃先はこちらでいいですか？'
    case SEER:
      return '占い先はこちらでいいですか？'
    case HUNTER:
      return '守護先はこちらでいいですか？'
    default:
      return '待ってください'
  }
}

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const agent: Agent = state.agents.filter(a => a.id === state.modal.id)[0]

  return {
    id: agent.id,
    image: agent.image,
    name: agent.name.ja,
    text: getText(state.base.phase, state.mine.myRole),
    visible: state.modal.visible,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): $Exact<DispatchProps> => ({
  handleClickNo: () => {
    dispatch(selectNo())
  },
  handleClickYes: selectedAgent => {
    dispatch(selectYes(selectedAgent))
  }
})
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default ModalContainer
