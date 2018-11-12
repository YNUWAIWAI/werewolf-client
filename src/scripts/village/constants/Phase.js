// @flow
export const DAY_CONVERSATION = 'day conversation'
export const DAY_VOTE = 'day vote'
export const NIGHT = 'night'
export const POST_MORTEM = 'post mortem'
export const RESULT = 'result'
export const VOTING_PHASE = [
  DAY_VOTE,
  NIGHT
]
const Phase = {
  'day conversation': '昼',
  'day vote': '投票',
  'night': '夜',
  'post mortem': '感想戦',
  'result': '結果'
}

export default Phase
