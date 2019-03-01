import AgentIcon, {Props as StateProps} from '../components/atoms/AgentIcon'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.agent) {
    return {
      className: 'info--agent',
      image: '',
      name: ''
    }
  }

  return {
    className: 'info--agent',
    image: state.mine.agent.image,
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
