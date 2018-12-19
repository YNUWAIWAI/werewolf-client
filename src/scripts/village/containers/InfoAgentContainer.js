// @flow
import AgentIcon, {type Props as StateProps} from '../components/atoms/AgentIcon'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

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
    name: getText({
      language: state.language,
      languageMap: state.agents.mine.name
    })
  }
}

const InfoAgentContainer = connect(
  mapStateToProps
)(AgentIcon)

export default InfoAgentContainer
