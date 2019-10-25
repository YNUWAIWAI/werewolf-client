import AgentIcon, {Props as StateProps} from '../components/atoms/AgentIcon'
import {getInitial, getText} from '../util'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.character) {
    return {
      className: 'vi--info--character',
      image: 'https://werewolf.world/image/0.3/character_icons/50x50/anonymous_50x50.png',
      initial: '',
      name: ''
    }
  }

  return {
    className: 'vi--info--character',
    image: state.mine.character.image,
    initial: getInitial(state.mine.character.name.en),
    name: getText({
      language: state.language,
      languageMap: state.mine.character.name
    })
  }
}

const InfoAgentContainer = connect(
  mapStateToProps
)(AgentIcon)

export default InfoAgentContainer
