// @flow
import {getMine, getPhaseInfo} from './server2client.js'

const phaseDict = {
  'day conversation': '昼',
  'day vote': '投票',
  'night': '夜',
  'post mortem': '感想戦',
  'results': '結果'
}

const genPlayerInfo = (): rawHTML => `<img src="${getMine().agent.image}"><span>${getMine().agent.name.ja}</span>`

const getPlayerRole = (): string => getMine().role.name.ja

const getPhaseText = (): string => `${getPhaseInfo().date}日目 ${phaseDict[getPhaseInfo().phase]}`

export {getPhaseText, getPlayerRole, genPlayerInfo}
