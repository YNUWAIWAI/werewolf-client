// @flow
import Modal, {type DispatchProps, type StateProps} from '../components/Modal'
import type {Phase, RoleId} from 'village'
import {type SelectNo, type SelectYes, selectNo, selectYes} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getRoleId} from '../constants/Role'
import {just} from '../util'

type Action =
  | SelectNo
  | SelectYes

const getText = (phase: Phase, role: RoleId) => {
  if (phase === DAY_VOTE) {
    return {
      en: 'EN',
      ja: '投票先はこちらでいいですか？'
    }
  }

  switch (role) {
    case 'werewolf':
      return {
        en: 'EN',
        ja: '襲撃先はこちらでいいですか？'
      }
    case 'seer':
      return {
        en: 'EN',
        ja: '占い先はこちらでいいですか？'
      }
    case 'hunter':
      return {
        en: 'EN',
        ja: '守護先はこちらでいいですか？'
      }
    default:
      return {
        en: '',
        ja: '待ってください'
      }
  }
}

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const selectedAgent = state.agents.all.find(a => a.id === state.modal.id)

  if (selectedAgent) {
    const myRole = just(state.roles.mine)

    return {
      id: selectedAgent.id,
      image: selectedAgent.image,
      name: selectedAgent.name[state.language],
      text: getText(state.base.phase, getRoleId(myRole['@id']))[state.language],
      timer: {
        limit: state.base.phaseTimeLimit,
        phase: state.base.phase
      },
      visible: state.modal.visible
    }
  }

  return {
    id: -1,
    image: '',
    name: '',
    text: '',
    timer: {
      limit: state.base.phaseTimeLimit,
      phase: state.base.phase
    },
    visible: state.modal.visible
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
