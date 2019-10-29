import RoleIcon, {Props as StateProps} from '../components/atoms/RoleIcon'
import {ReducerState} from '../reducers'
import {VERSION} from '../constants/Version'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.role) {
    return {
      className: 'vi--info--role',
      image: `https://werewolf.world/image/${VERSION}/character_icons/50x50/anonymous_50x50.png`,
      name: ''
    }
  }

  return {
    className: 'vi--info--role',
    image: state.mine.role.image,
    name: getText({
      language: state.language,
      languageMap: state.mine.role.name
    })
  }
}

const InfoRoleContainer = connect(
  mapStateToProps
)(RoleIcon)

export default InfoRoleContainer
