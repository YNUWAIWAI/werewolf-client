// @flow
import CommandSelection, {type DispatchProps, type StateProps} from '../components/organisms/CommandSelection'
import type {Language, Phase, RoleId} from 'village'
import {type SelectOption, selectOption} from '../actions'
import {DAY_VOTE} from '../constants/Phase'
import type {Dispatch} from 'redux'
import {IntlProvider} from 'react-intl'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getMessages} from '../../../i18n/village'
import {getRoleId} from '../constants/Role'

type Action =
  | SelectOption

const getText = (phase: Phase, role: RoleId, fixed: boolean, language: Language) => {
  const {intl} = new IntlProvider(
    {
      locale: language,
      messages: getMessages(language)
    },
    {}
  ).getChildContext()

  if (phase === DAY_VOTE) {
    return fixed ?
      intl.formatMessage({
        id: 'CommandSelectionContainer.dayVote.fixed'
      }) :
      intl.formatMessage({
        id: 'CommandSelectionContainer.dayVote.unfixed'
      })
  }

  switch (role) {
    case 'hunter':
      return fixed ?
        intl.formatMessage({
          id: 'CommandSelectionContainer.hunterVote.fixed'
        }) :
        intl.formatMessage({
          id: 'CommandSelectionContainer.hunterVote.unfixed'
        })
    case 'seer':
      return fixed ?
        intl.formatMessage({
          id: 'CommandSelectionContainer.seerVote.fixed'
        }) :
        intl.formatMessage({
          id: 'CommandSelectionContainer.seerVote.unfixed'
        })
    case 'werewolf':
      return fixed ?
        intl.formatMessage({
          id: 'CommandSelectionContainer.werewolfVote.fixed'
        }) :
        intl.formatMessage({
          id: 'CommandSelectionContainer.werewolfVote.unfixed'
        })
    default:
      return intl.formatMessage({
        id: 'CommandSelectionContainer.wait'
      })
  }
}

const mapStateToProps = (state: ReducerState): StateProps => {
  const agents = state.commandSelection.agents
    .map(a => ({
      id: a.id,
      image: a.image,
      name: a.name[state.language]
    }))

  if (!state.roles.mine) {
    return {
      agents,
      fixed: state.commandSelection.fixed,
      text: '',
      timer: {
        limit: state.base.phaseTimeLimit,
        phase: state.base.phase
      }
    }
  }

  return {
    agents,
    fixed: state.commandSelection.fixed,
    text: getText(
      state.base.phase,
      getRoleId(state.roles.mine['@id']),
      state.commandSelection.fixed,
      state.language
    ),
    timer: {
      limit: state.base.phaseTimeLimit,
      phase: state.base.phase
    }
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  handleSelectOption: agentId => () => {
    dispatch(
      selectOption(agentId)
    )
  }
})
const CommandSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandSelection)

export default CommandSelectionContainer
