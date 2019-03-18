import * as ActionTypes from '../constants/ActionTypes'
import reducer, {Content, initialState} from './app'

// test('LOGOUT', () => {
//   const spy = jest.spyOn(window.location, 'replace')

//   expect(
//     reducer(
//       initialState,
//       {
//         type: ActionTypes.global.LOGOUT
//       }
//     )
//   ).toEqual(
//     initialState
//   )
//   expect(spy).toHaveBeenCalled()
// })
test('SELECT_VILLAGE', () => {
  expect(
    reducer(
      initialState,
      {
        id: 4,
        type: ActionTypes.global.SELECT_VILLAGE
      }
    )
  ).toEqual(
    {
      content: Content.WaitingForPlayers
    }
  )
})
test('BUILD_VILLAGE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.BUILD_VILLAGE
      }
    )
  ).toEqual(
    {
      content: Content.WaitingForPlayers
    }
  )
})
test('SHOW_ADVANCED_SEARCH', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_ADVANCED_SEARCH
      }
    )
  ).toEqual(
    {
      content: Content.AdvancedSearch
    }
  )
})
test('SHOW_BUILD_VILLAGE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_BUILD_VILLAGE
      }
    )
  ).toEqual(
    {
      content: Content.BuildVillage
    }
  )
})
test('SHOW_CONNECTING_TO_ROBOT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_CONNECTING_TO_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      content: Content.ConnectingToRobotPlayer
    }
  )
})
// test('SHOW_CREDITS', () => {
//   const spy = jest.spyOn(window, 'open')

//   expect(
//     reducer(
//       initialState,
//       {
//         type: ActionTypes.Target.SHOW_CREDITS
//       }
//     )
//   ).toEqual(initialState)
//   expect(spy).toHaveBeenCalled()
// })
// test('SHOW_HOW_TO_PLAY', () => {
//   const spy = jest.spyOn(window, 'open')

//   expect(
//     reducer(
//       initialState,
//       {
//         type: ActionTypes.Target.SHOW_HOW_TO_PLAY
//       }
//     )
//   ).toEqual(initialState)
//   expect(spy).toHaveBeenCalled()
// })
test('SHOW_HISTORY', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_HISTORY
      }
    )
  ).toEqual(
    {
      content: Content.History
    }
  )
})
test('SHOW_ID_SEARCH', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_ID_SEARCH
      }
    )
  ).toEqual(
    {
      content: Content.IdSearch
    }
  )
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
      }
    )
  ).toEqual(
    {
      content: Content.LobbyForAudience
    }
  )
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toEqual(
    {
      content: Content.LobbyForHumanPlayer
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      content: Content.LobbyForRobotPlayer
    }
  )
})
test('SHOW_MAIN', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_MAIN
      }
    )
  ).toEqual(
    {
      content: Content.Main
    }
  )
})
test('SHOW_SETTINGS', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_SETTINGS
      }
    )
  ).toEqual(
    {
      content: Content.Settings
    }
  )
})
