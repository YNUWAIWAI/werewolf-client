import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import {socketSend} from '../actions'

const initialState = {
  myAgentImage: 'https://werewolf.world/image/0.1/Gert.jpg',
  myAgentName: {
    ja: 'ゲルト'
  },
  myRole: {
    myRoleName: {
      ja: '人狼'
    }
  }
}
const mine = (state = initialState, action) => {
  if (
    action.type === ActionTypes.SOCKET_MESSAGE &&
    action.payload['@context'].includes(Contexts.AGENT) &&
    action.payload['@context'].includes(Contexts.ROLE)
  ) {
    const agent = action.payload.agent.filter(a => a.agentIsMine)[0]
    const role = action.payload.role.filter(r => r.roleIsMine)[0]

    return {
      '@id': agent['@id'],
      'myAgentId': agent.id,
      'myAgentImage': agent.image,
      'myAgentName': agent.name,
      'myRole': {
        '@id': role['@id'],
        'myRoleImage': role.image,
        'myRoleName': role.name
      }
    }
  }

  return state
}

export default mine
