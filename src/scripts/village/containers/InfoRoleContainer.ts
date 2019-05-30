import RoleIcon, {Props as StateProps} from '../components/atoms/RoleIcon'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'
import {getText} from '../util'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.role) {
    return {
      class: 'vi--info--role',
      image: 'https://werewolf.world/image/0.3/agent_icons/50x50/anonymous_50x50.png',
      name: ''
    }
  }

  return {
    class: 'vi--info--role',
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
