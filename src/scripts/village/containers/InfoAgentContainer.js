// @flow
import AgentIcon, {type Props as StateProps} from '../components/atoms/AgentIcon'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.agents.mine) {
    return {
      class: 'info--agent',
      image: '',
      name: ''
    }
  }

  return {
    class: 'info--agent',
    image: state.agents.mine.image,
    name: state.agents.mine.name[state.language]
  }
}

const InfoAgentContainer = connect(
  mapStateToProps
)(AgentIcon)

export default InfoAgentContainer
