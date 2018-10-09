// @flow
import Modal from '../../src/scripts/village/components/Modal'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('village|Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const story =
      <Modal
        handleClickNo={action('handleClickNo')}
        handleClickYes={action('handleClickYes')}
        id={1}
        image="https://werewolf.world/image/0.1/Walter.jpg"
        name="ヴァルター"
        text="投票先はこちらでいいですか？"
        timer={timer}
        visible
      />

    return story
  })
