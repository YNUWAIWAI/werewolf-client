import * as ActionTypes from '../constants/ActionTypes'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Confirmation {
  type SelectNo = {
    type: ActionTypes.App.SELECT_NO
  }
  type SelectYes = {
    type: ActionTypes.App.SELECT_YES
  }
}

const selectNo = (): Confirmation.SelectNo => ({
  type: ActionTypes.App.SELECT_NO
})
const selectYes = (): Confirmation.SelectYes => ({
  type: ActionTypes.App.SELECT_YES
})

export const confirmation = {
  selectNo,
  selectYes
}
