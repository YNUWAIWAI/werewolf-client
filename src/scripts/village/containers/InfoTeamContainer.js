// @flow
import InfoTeam, {type StateProps} from '../components/molecules/InfoTeam'
import {getTeam, strToRoleId} from '../util'
import {type ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  if (!state.roles.mine) {
    return {
      team: ''
    }
  }

  return {
    team: getTeam(strToRoleId(state.roles.mine.name.en))
  }
}

const InfoTeamContainer = connect(
  mapStateToProps
)(InfoTeam)

export default InfoTeamContainer
