// @flow
import {HUNTER, SEER, WEREWOLF} from '../constants/Role'
import Modal, {type DispatchProps, type StateProps} from '../components/organisms/Modal'
import type {Phase, RoleId} from 'village'
import {type SelectNo, type SelectYes, selectNo, selectYes} from '../actions'
import {just, strToRoleId} from '../util'
import {DAY} from '../constants/Phase'
import type {Dispatch} from 'redux'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectNo
  | SelectYes

const getDescriptionId = (phase: Phase, role: RoleId) => {
  if (phase === DAY) {
    return 'Modal.Description.dayVote'
  }

  switch (role) { // phase === NIGHT
    case HUNTER:
      return 'Modal.Description.hunterVote'
    case SEER:
      return 'Modal.Description.seerVote'
    case WEREWOLF:
      return 'Modal.Description.werewolfVote'
    default:
      return 'Modal.Description.wait'
  }
}

const mapStateToProps = (state: ReducerState): $Exact<StateProps> => {
  const selectedAgent = state.agents.all.find(a => a.id === state.modal.id)

  if (selectedAgent) {
    const myRole = just(state.roles.mine)

    return {
      descriptionId: getDescriptionId(state.base.phase, strToRoleId(myRole.name.en)),
      id: selectedAgent.id,
      image: selectedAgent.image,
      name: selectedAgent.name[state.language],
      timer: {
        limit: state.base.phaseTimeLimit,
        phase: state.base.phase
      },
      visible: state.modal.visible
    }
  }

  return {
    descriptionId: 'Modal.Description.wait',
    id: -1,
    image: '',
    name: '',
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
