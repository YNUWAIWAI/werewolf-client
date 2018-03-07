import * as types from '../constants/ActionTypes'
import Cast from '../constants/Cast'
import {socket} from '../actions'

const client2server = store => next => action => {
  switch(action.type) {
    case types.BUILD_VILLAGE: {
      const state = store.getState()
      const payload = {
        name: state.buildVillage.village.villageName,
        id: -1,
        hostPlayer: {
          name: state.buildVillage.village.hostName,
          isAnonymous: state.buildVillage.village.avatar === 'random',
          isHuman: state.buildVillage.village.isHuman
        },
        playerSetting: {
          number: state.buildVillage.village.numberOfPlayers,
          current: -1,
          robot: {
            min: state.buildVillage.village.numberOfRobots,
            current: -1
          },
          human: {
            max: state.buildVillage.village.numberOfHumans,
            current: -1
          }
        },
        roleSetting: Cast[state.buildVillage.village.numberOfPlayers][state.buildVillage.village.member],
        avatar: state.buildVillage.village.avatar,
        comment: state.buildVillage.village.comment
      }

      socket.send(payload)

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
