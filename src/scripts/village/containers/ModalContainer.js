// @flow
import type {Language, Phase, RoleId} from 'village'
import Modal, {type DispatchProps, type StateProps} from '../components/Modal'
import {type SelectNo, type SelectYes, selectNo, selectYes} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import {IntlProvider} from 'react-intl'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../../../i18n/village'
import {getRoleId} from '../constants/Role'
import {just} from '../util'

type Action =
  | SelectNo
  | SelectYes

const getText = (phase: Phase, role: RoleId, language: Language) => {
  const {intl} = new IntlProvider(
    {
      locale: language,
      messages: getMessages(language)
    },
    {}
  ).getChildContext()

  if (phase === DAY_VOTE) {
    return intl.formatMessage({
      id: 'ModalContainer.dayVote'
    })
  }

  switch (role) {
    case 'werewolf':
      return intl.formatMessage({
        id: 'ModalContainer.werewolfVote'
      })
    case 'seer':
      return intl.formatMessage({
        id: 'ModalContainer.seerVote'
      })
    case 'hunter':
      return intl.formatMessage({
        id: 'ModalContainer.hunterVote'
      })
    default:
      return intl.formatMessage({
        id: 'ModalContainer.wait'
      })
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
      text: getText(state.base.phase, getRoleId(myRole['@id']), state.language),
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
