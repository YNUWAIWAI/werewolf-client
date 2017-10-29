import {getAllAgents, getAllRoles, getPhaseInfo} from './server2client.js'

const phaseDict = {
  'day conversation': '昼',
  'day vote': '投票',
  'night': '夜',
  'post mortem': '感想戦',
  'results': '結果'
}

const getMine = () => {
  const agent = getAllAgents().filter(a => a.agentIsMine)[0]
  const role = getAllRoles().filter(r => r.roleIsMine)[0]

  return {
    agent,
    role
  }
}

const initInfo = () => {
  const phaseInfo = getPhaseInfo()
  const mine = getMine()

  return `
  <div class="day">
    <div class="day--text">
      <span id="day-phase">${phaseInfo.date}日目 ${phaseDict[phaseInfo.phase]}</span>
      <span id="day-time"></span>
    </div>
  </div>
  <div class="role">
    <div id="player" class="role--icon">
      <img src="${mine.agent.image}">
      <span>${mine.agent.name.ja}</span>
    </div>
    <div class="role--text">
      あなたは<span id='role-name'>${mine.role.name.ja}</span>です
    </div>
  </div>`
}

export {initInfo}
