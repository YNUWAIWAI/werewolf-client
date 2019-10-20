import * as village from '../types'
import Modal, {DispatchProps, StateProps} from '../components/organisms/Modal'
import {SelectNo, SelectYes, selectNo, selectYes} from '../actions'
import {getInitial, getText, just} from '../util'
import {Dispatch} from 'redux'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

type Action =
  | SelectNo
  | SelectYes

const getDescriptionId = (phase: village.Phase, role: village.RoleId) => {
  if (phase === village.Phase.noon) {
    return 'Modal.Description.noonVote'
  }

  switch (role) { // phase === NIGHT
    case village.RoleId.hunter:
      return 'Modal.Description.hunterVote'
    case village.RoleId.seer:
      return 'Modal.Description.seerVote'
    case village.RoleId.werewolf:
      return 'Modal.Description.werewolfVote'
    default:
      return 'Modal.Description.wait'
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  const selectedAgentId = state.commandSelection.allIds.find(agentId => agentId === state.modal.id)

  if (typeof selectedAgentId === 'undefined') {
    return {
      descriptionId: 'Modal.Description.wait',
      id: '',
      image: 'https://werewolf.world/image/0.3/agent_icons/50x50/anonymous_50x50.png',
      initial: '',
      name: '',
      visible: state.modal.visible
    }
  }

  const selectedAgent = state.commandSelection.byId[selectedAgentId]
  const myRole = just(state.mine.role)

  return {
    descriptionId: getDescriptionId(state.base.phase, myRole.id),
    id: selectedAgent.id,
    image: selectedAgent.image,
    initial: getInitial(selectedAgent.name.en),
    name: getText({
      language: state.language,
      languageMap: selectedAgent.name
    }),
    visible: state.modal.visible
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
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
