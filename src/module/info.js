// @flow
import {getMine, getPhaseInfo} from './server2client.js'

const phaseDict = {
  'day conversation': '昼',
  'day vote': '投票',
  'night': '夜',
  'post mortem': '感想戦',
  'results': '結果'
}

const mine = getMine()

function genPlayerInfo(): string {
  return `<img src="${mine.agent.image}"><span>${mine.agent.name.ja}</span>`
}

function getPlayerRole(): string {
  return mine.role.name.ja
}

function getPhaseText(): rawHTML {
  return `${getPhaseInfo().date}日目 ${phaseDict[getPhaseInfo().phase]}`
}

export {getPhaseText, getPlayerRole, genPlayerInfo}
