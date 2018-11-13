// @flow
export const MORNING = 'morning'
export const DAY = 'day'
export const NIGHT = 'night'
export const POST_MORTEM = 'post mortem'
export const RESULT = 'result'
export const VOTING_PHASE = [
  DAY,
  NIGHT
]
const Phase = {
  'day': '投票',
  'morning': '昼',
  'night': '夜',
  'post mortem': '感想戦',
  'result': '結果'
}

export default Phase
