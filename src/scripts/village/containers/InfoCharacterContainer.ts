import CharacterIcon, {Props as StateProps} from '../components/atoms/CharacterIcon'
import {
  getInitial,
  getText
} from '../util'
import {ImagePath} from '../constants/ImagePath'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.character) {
    return {
      className: 'vi--info--character',
      image: ImagePath.Character.anonymous,
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

const InfoCharacterContainer = connect(
  mapStateToProps
)(CharacterIcon)

export default InfoCharacterContainer
