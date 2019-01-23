import TeamIcon, {Props as StateProps} from '../components/atoms/TeamIcon'
import {getTeam, strToRoleId} from '../util'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.roles.mine) {
    return {
      class: 'info--team',
      team: ''
    }
  }

  return {
    class: 'info--team',
    team: getTeam(strToRoleId(state.roles.mine.name.en))
  }
}

const InfoTeamContainer = connect(
  mapStateToProps
)(TeamIcon)

export default InfoTeamContainer
