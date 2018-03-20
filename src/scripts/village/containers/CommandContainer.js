import {postChat, selectOption, setIsSendable} from '../actions'
import Command from '../components/Command'
import {DAY_VOTE} from '../constants/Phase'
import {connect} from 'react-redux'
import {trimBaseUri} from '../module/util'

const getText = (phase, role, fixed) => {
  if (phase === DAY_VOTE) {
    return '投票先を選んでください'
  }

  switch (role) {
    case 'werewolf':
      return fixed ? 'あなたの選んだ襲撃先はこちらです' : '襲撃先を選んでください'
    case 'seer':
      return fixed ? 'あなたの選んだ占い先はこちらです' : '占い先を選んでください'
    case 'hunter':
      return fixed ? 'あなたの選んだ守護先はこちらです' : '守護先を選んでください'
    default:
      return '待ってください'
  }
}

const mapStateToProps = state => {
  if (!state.roles.mine) {
    return {
      ... state.command,
      agents: state.agents.all,
      hide: state.hideButton.hide,
      phase: state.base.phase,
      text: ''
    }
  }

  return {
    ... state.command,
    agents: state.agents.all,
    hide: state.hideButton.hide,
    phase: state.base.phase,
    text: getText(state.base.phase, trimBaseUri(state.roles.mine['@id']), state.command.fixed)
  }
}

const mapDispatchToProps = dispatch => ({
  handlePostChat: kind => text => dispatch(postChat({
    kind,
    text
  })),
  handleSelectOption: agentId => dispatch(selectOption(agentId)),
  setIsSendable: kind => isSendable => dispatch(setIsSendable({
    isSendable,
    kind
  }))
})
const CommandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Command)

export default CommandContainer
