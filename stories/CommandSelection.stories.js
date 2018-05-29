// @flow
/* eslint sort-keys: 0 */
import CommandSelection from '../src/scripts/village/components/CommandSelection'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('Command/CommandSelection', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
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
        image: 'https://werewolf.world/image/0.1/Alvin.jpg',
        id: 9,
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
    const timer = {
      limit: 90,
      phase: 'day vote'
    }
    const story = <CommandSelection agents={agents} handleSelectOption={id => action(`handleSelectOption id: ${id}`)} text="投票先を選んでください" timer={timer} />

    return story
  }))
