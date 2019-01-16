import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import WaitingForPlayersContainer from './WaitingForPlayersContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<WaitingForPlayersContainer />', () => {
  const store = fakeStore(
    {
      waitingForPlayers: {
        isPlayer: true,
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
          avatar: 'random',
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
