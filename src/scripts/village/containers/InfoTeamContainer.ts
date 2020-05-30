import {
  TeamIcon as Component,
  Props as StateProps
} from '../components/atoms/TeamIcon'
import {
  getTeam,
  strToRoleId
} from '../util'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.mine.role) {
    return {
      class: 'vi--info--team',
      team: ''
    }
  }

  return {
    class: 'vi--info--team',
    team: getTeam(strToRoleId(state.mine.role.name.en))
  }
}

export const InfoTeamContainer = connect(
  mapStateToProps
)(Component)
