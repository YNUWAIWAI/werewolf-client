import * as ActionTypes from '../constants/ActionTypes'
import reducer, {Content, initialState} from './app'

test('SELECT_VILLAGE', () => {
  expect(
    reducer(
      initialState,
      {
        id: 4,
        type: ActionTypes.global.SELECT_VILLAGE
      }
    )
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
    {
      content: Content.ConnectingToRobotPlayer
    }
  )
})
test('SHOW_HISTORY', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_HISTORY
      }
    )
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
    {
      content: Content.Settings
    }
  )
})
