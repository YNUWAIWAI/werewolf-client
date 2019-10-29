import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import WaitingForPlayers from '../components/templates/WaitingForPlayers'
import WaitingForPlayersContainer from './WaitingForPlayersContainer'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<WaitingForPlayersContainer />', () => {
  describe('render', () => {
    test('regular', () => {
      const store = fakeStore(
        {
          ping: {
            id: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
            myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
            results: [
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
              },
              {
                ping: '0.500 s',
                status: lobby.PingStatus.safe,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
              }
            ]
          },
          waitingForPlayers: {
            isPlayer: true,
            kickOutToken: '',
            menuItems: [
              {
                id: 'Menu.playGame',
                isLoading: false,
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ],
            players: [
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: true,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
              },
              {
                avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
                isAnonymous: true,
                isHost: false,
                isMe: true,
                name: 'Cathy',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
              }
            ],
            village: {
              avatar: lobby.Avatar.random,
              comment: 'Experts recommended',
              hostPlayer: {
                isAnonymous: true,
                isHuman: true,
                name: 'Anonymous'
              },
              id: 1,
              idForSearching: 123,
              name: 'Fairytale village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            }
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <WaitingForPlayersContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('state.ping.results equals to []', () => {
      const store = fakeStore(
        {
          waitingForPlayers: {
            isPlayer: true,
            kickOutToken: '',
            menuItems: [
              {
                id: 'Menu.playGame',
                isLoading: false,
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ],
            players: [
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: true,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
              },
              {
                avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
                isAnonymous: true,
                isHost: false,
                isMe: true,
                name: 'Cathy',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
              },
              {
                avatarImage: '/assets/images/avatar/default/user.png',
                isAnonymous: true,
                isHost: false,
                isMe: false,
                name: 'Anonymous',
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
              }
            ],
            village: {
              avatar: lobby.Avatar.random,
              comment: 'Experts recommended',
              hostPlayer: {
                isAnonymous: true,
                isHuman: true,
                name: 'Anonymous'
              },
              id: 1,
              idForSearching: 123,
              name: 'Fairytale village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            }
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <WaitingForPlayersContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('state.waitingForPlayers.village is null', () => {
      const store = fakeStore(
        {
          waitingForPlayers: {
            isPlayer: true,
            kickOutToken: '',
            menuItems: [
              {
                id: 'Menu.playGame',
                isLoading: false,
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ],
            players: [],
            village: null
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <WaitingForPlayersContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  test('confirmKickOutPlayer', () => {
    const store = fakeStore(
      {
        waitingForPlayers: {
          isPlayer: true,
          kickOutToken: '',
          menuItems: [
            {
              id: 'Menu.playGame',
              isLoading: false,
              types: [ActionTypes.Target.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
            }
          ],
          players: [],
          village: null
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <WaitingForPlayersContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(WaitingForPlayers).props().confirmKickOutPlayer({
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    })
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
    })
  })
  test('transition', () => {
    const store = fakeStore(
      {
        waitingForPlayers: {
          isPlayer: true,
          kickOutToken: '',
          menuItems: [
            {
              id: 'Menu.playGame',
              isLoading: false,
              types: [ActionTypes.Target.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
            }
          ],
          players: [],
          village: null
        }
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <WaitingForPlayersContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(WaitingForPlayers).props().transition(ActionTypes.Target.PLAY_GAME)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.PLAY_GAME
    })
  })
})
