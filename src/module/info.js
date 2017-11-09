// @flow
import {getMine, getPhaseInfo} from './server2client.js'

const phaseDict = {
  'day conversation': '昼',
  'day vote': '投票',
  'night': '夜',
  'post mortem': '感想戦',
  'results': '結果'
}

function genPlayerInfo(): rawHTML {
  return `<img src="${getMine().agent.image}"><span>${getMine().agent.name.ja}</span>`
}

function getPlayerRole(): string {
  return getMine().role.name.ja
}

function getPhaseText(): string {
  return `${getPhaseInfo().date}日目 ${phaseDict[getPhaseInfo().phase]}`
}

export {getPhaseText, getPlayerRole, genPlayerInfo}
