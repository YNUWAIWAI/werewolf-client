import AgentIcon, {Props as StateProps} from '../components/atoms/AgentIcon'
import {getInitial, getText} from '../util'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.agent) {
    return {
      className: 'vi--info--agent',
      image: 'https://werewolf.world/image/0.3/agent_icons/50x50/anonymous_50x50.png',
      initial: '',
      name: ''
    }
  }

  return {
    className: 'vi--info--agent',
    image: state.mine.agent.image,
    initial: getInitial(state.mine.agent.name.en),
    name: getText({
      language: state.language,
      languageMap: state.mine.agent.name
    })
  }
}

const InfoAgentContainer = connect(
  mapStateToProps
)(AgentIcon)

export default InfoAgentContainer
