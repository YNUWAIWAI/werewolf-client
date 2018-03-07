import {
  changeAvatar,
  changeComment,
  changeHostName,
  changeMember,
  changeNumberOfPlayers,
  changeNumberOfRobots,
  changeVillageName
} from '../actions'
import BuildVillage from '../components/BuildVillage'
import {connect} from 'react-redux'

const mapStateToProps = state => state.buildVillage
const mapDispatchToProps = dispatch => ({
  handleChange: propName => event => {
    const value = event.target.value

    if (propName === 'avatar') {
      dispatch(changeAvatar(value))
    }
    if (propName === 'comment') {
      dispatch(changeComment(value))
    }
    if (propName === 'hostName') {
      dispatch(changeHostName(value))
    }
    if (propName === 'member') {
      dispatch(changeMember(value))
    }
    if (propName === 'numberOfPlayers') {
      dispatch(changeNumberOfPlayers(value))
    }
    if (propName === 'numberOfRobots') {
      dispatch(changeNumberOfRobots(value))
    }
    if (propName === 'villageName') {
      dispatch(changeVillageName(value))
    }
  }
})
const BuildVillageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildVillage)

export default BuildVillageContainer
