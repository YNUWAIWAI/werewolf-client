import * as React from 'react'
import CommandSelection from '../../src/scripts/village/components/organisms/CommandSelection'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Command/CommandSelection', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const agents = [
      {
        id: 1,
        image: 'https://werewolf.world/image/0.1/Walter.jpg',
        name: 'ヴァルター'
      },
      {
        id: 2,
        image: 'https://werewolf.world/image/0.1/Moritz.jpg',
        name: 'モーリッツ'
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.1/Simson.jpg',
        name: 'ジムゾン'
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.1/Thomas.jpg',
        name: 'トーマス'
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.1/Nicholas.jpg',
        name: 'ニコラス'
      },
      {
        id: 6,
        image: 'https://werewolf.world/image/0.1/Dieter.jpg',
        name: 'ディーター'
      },
      {
        id: 7,
        image: 'https://werewolf.world/image/0.1/Peter.jpg',
        name: 'ペーター'
      },
      {
        id: 8,
        image: 'https://werewolf.world/image/0.1/Lisa.jpg',
        name: 'リーザ'
      },
      {
        id: 9,
        image: 'https://werewolf.world/image/0.1/Alvin.jpg',
        name: 'アルビン'
      },
      {
        id: 11,
        image: 'https://werewolf.world/image/0.1/Otto.jpg',
        name: 'オットー'
      },
      {
        id: 12,
        image: 'https://werewolf.world/image/0.1/Joachim.jpg',
        name: 'ヨアヒム'
      },
      {
        id: 13,
        image: 'https://werewolf.world/image/0.1/Pamela.jpg',
        name: 'パメラ'
      },
      {
        id: 14,
        image: 'https://werewolf.world/image/0.1/Jacob.jpg',
        name: 'ヤコブ'
      }
    ]
    const story =
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.unfixed"
        fixed={false}
        handleSelectOption={id => action(`handleSelectOption id: ${id}`)}
      />

    return story
  })
