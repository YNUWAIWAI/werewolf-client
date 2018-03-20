// @flow
import Modal, {type DispatchProps, type StateProps} from '../components/Modal'
import {type SelectNo, type SelectYes, selectNo, selectYes} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {trimBaseUri} from '../module/util'

type Action =
  | SelectNo
  | SelectYes

const getText = (phase: Phase, role: RoleId) => {
  if (phase === DAY_VOTE) {
    return '投票先はこちらでいいですか？'
  }

  switch (role) {
    case 'werewolf':
      return '襲撃先はこちらでいいですか？'
    case 'seer':
      return '占い先はこちらでいいですか？'
    case 'hunter':
      return '守護先はこちらでいいですか？'
    default:
      return '待ってください'
  }
}

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const selectedAgent: Agent = state.agents.all.filter(a => a.id === state.modal.id)[0]

  if (!state.roles.mine) {
    return {
      id: selectedAgent.id,
      image: selectedAgent.image,
      name: selectedAgent.name.ja,
      text: '',
      visible: state.modal.visible,
    }
  }

  return {
    id: selectedAgent.id,
    image: selectedAgent.image,
    name: selectedAgent.name.ja,
    text: getText(state.base.phase, trimBaseUri(state.roles.mine['@id'])),
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
