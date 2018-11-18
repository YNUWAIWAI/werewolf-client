// @flow
/* eslint sort-keys: 0 */
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import Result from '../../src/scripts/village/components/organisms/Result'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('village|Result', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('13 players', () => {
    const agents = {
      'agent0': {
        'agentId': 1,
        'agentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
        'agentName': 'ヴァルター',
        'avatarImage': 'https://werewolf.world/image/0.1/Gert.jpg',
        'avatarName': 'Suzuki',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/seer.jpg',
        'roleName': '占い師',
        'status': 'alive'
      },
      'agent1': {
        'agentId': 2,
        'agentImage': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'agentName': 'モーリッツ',
        'avatarImage': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'avatarName': 'Takahashi',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'roleName': '人狼',
        'status': 'alive'
      },
      'agent2': {
        'agentId': 3,
        'agentImage': 'https://werewolf.world/image/0.1/Simson.jpg',
        'agentName': 'ジムゾン',
        'avatarImage': 'https://werewolf.world/image/0.1/Friedel.jpg',
        'avatarName': 'Tanaka',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg',
        'roleName': '狩人',
        'status': 'alive'
      },
      'agent3': {
        'agentId': 4,
        'agentImage': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'agentName': 'トーマス',
        'avatarImage': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'avatarName': 'Ito',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/medium.jpg',
        'roleName': '霊媒師',
        'status': 'alive'
      },
      'agent4': {
        'agentId': 5,
        'agentImage': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'agentName': 'ニコラス',
        'avatarName': 'Watanabe',
        'avatarImage': 'https://werewolf.world/image/0.1/Erna.jpg',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werehamster.jpg',
        'roleName': 'ハムスター人間',
        'status': 'death by fear'
      },
      'agent5': {
        'agentId': 6,
        'agentImage': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'agentName': 'ディーター',
        'avatarName': 'Yamamoto',
        'avatarImage': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/madman.jpg',
        'roleName': '狂人',
        'status': 'death by execution'
      },
      'agent6': {
        'agentId': 7,
        'agentImage': 'https://werewolf.world/image/0.1/Peter.jpg',
        'agentName': 'ペーター',
        'avatarName': 'Nakamura',
        'avatarImage': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'roleName': '人狼',
        'status': 'unnatural death'
      },
      'agent7': {
        'agentImage': 'https://werewolf.world/image/0.1/Lisa.jpg',
        'agentName': 'リーザ',
        'agentId': 8,
        'avatarImage': 'https://werewolf.world/image/0.1/Peter.jpg',
        'avatarName': 'Kobayashi',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': '村人',
        'status': 'unnatural death'
      },
      'agent8': {
        'agentId': 9,
        'agentImage': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'agentName': 'アルビン',
        'avatarImage': 'https://werewolf.world/image/0.1/Peter.jpg',
        'avatarName': 'Yoshida',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': '村人',
        'status': 'unnatural death',
        'result': 'win'
      },
      'agent9': {
        'agentId': 11,
        'agentImage': 'https://werewolf.world/image/0.1/Otto.jpg',
        'agentName': 'オットー',
        'avatarImage': 'https://werewolf.world/image/0.1/Simson.jpg',
        'avatarName': 'Sasaki',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/mason.jpg',
        'roleName': '共有者',
        'status': 'unnatural death'
      },
      'agent10': {
        'agentId': 12,
        'agentImage': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'agentName': 'ヨアヒム',
        'avatarImage': 'https://werewolf.world/image/0.1/Otto.jpg',
        'avatarName': '山口',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': '村人',
        'status': 'death by attack'
      },
      'agent11': {
        'agentName': 'パメラ',
        'agentImage': 'https://werewolf.world/image/0.1/Pamela.jpg',
        'agentId': 13,
        'avatarImage': 'https://werewolf.world/image/0.1/Joachim.jpg',
        'avatarName': '松本',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': '村人',
        'status': 'alive'
      },
      'agent12': {
        'agentId': 14,
        'agentImage': 'https://werewolf.world/image/0.1/Jacob.jpg',
        'agentName': 'ヤコブ',
        'avatarImage': 'https://werewolf.world/image/0.1/Catalina.jpg',
        'avatarName': '井上',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
        'roleName': '村人',
        'status': 'alive'
      }
    }
    const losers = [
      'agent1',
      'agent4',
      'agent5',
      'agent6'
    ]
    const me = 'agent0'
    const summary = {
      description: 'Result.summary.description(player, villager, villager, win)',
      loser: 'Result.summary.loser(werewolf, werehamster)',
      winner: 'Result.summary.winner(villager)'
    }
    const winners = [
      'agent0',
      'agent2',
      'agent3',
      'agent7',
      'agent8',
      'agent9',
      'agent10',
      'agent11',
      'agent12'
    ]
    const story =
      <Result
        agents={agents}
        handleClickCloseButton={action('handleCloseClick')}
        losers={losers}
        me={me}
        summary={summary}
        visible
        winners={winners}
      />

    return story
  })
  .add('5 players', () => {
    const agents = {
      'agent0': {
        'agentId': 1,
        'agentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
        'agentName': 'ヴァルター',
        'avatarImage': 'https://werewolf.world/image/0.1/Gert.jpg',
        'avatarName': 'Suzuki',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/seer.jpg',
        'roleName': '占い師',
        'status': 'alive'
      },
      'agent1': {
        'agentId': 2,
        'agentImage': 'https://werewolf.world/image/0.1/Moritz.jpg',
        'agentName': 'モーリッツ',
        'avatarImage': 'https://werewolf.world/image/0.1/Alvin.jpg',
        'avatarName': 'Takahashi',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
        'roleName': '人狼',
        'status': 'alive'
      },
      'agent2': {
        'agentId': 3,
        'agentImage': 'https://werewolf.world/image/0.1/Simson.jpg',
        'agentName': 'ジムゾン',
        'avatarImage': 'https://werewolf.world/image/0.1/Friedel.jpg',
        'avatarName': 'Tanaka',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg',
        'roleName': '狩人',
        'status': 'alive'
      },
      'agent3': {
        'agentId': 4,
        'agentImage': 'https://werewolf.world/image/0.1/Thomas.jpg',
        'agentName': 'トーマス',
        'avatarImage': 'https://werewolf.world/image/0.1/Dieter.jpg',
        'avatarName': 'Ito',
        'result': 'win',
        'roleImage': 'https://werewolf.world/image/0.1/medium.jpg',
        'roleName': '霊媒師',
        'status': 'alive'
      },
      'agent4': {
        'agentId': 5,
        'agentImage': 'https://werewolf.world/image/0.1/Nicholas.jpg',
        'agentName': 'ニコラス',
        'avatarName': 'Watanabe',
        'avatarImage': 'https://werewolf.world/image/0.1/Erna.jpg',
        'result': 'lose',
        'roleImage': 'https://werewolf.world/image/0.1/werehamster.jpg',
        'roleName': 'ハムスター人間',
        'status': 'death by fear'
      }
    }
    const losers = [
      'agent1',
      'agent4'
    ]
    const me = 'agent0'
    const summary = {
      description: 'Result.summary.description(player, villager, villager, win)',
      loser: 'Result.summary.loser(werewolf, werehamster)',
      winner: 'Result.summary.winner(villager)'
    }
    const winners = [
      'agent0',
      'agent2',
      'agent3'
    ]
    const story =
      <Result
        agents={agents}
        handleClickCloseButton={action('handleCloseClick')}
        losers={losers}
        me={me}
        summary={summary}
        visible
        winners={winners}
      />

    return story
  })
