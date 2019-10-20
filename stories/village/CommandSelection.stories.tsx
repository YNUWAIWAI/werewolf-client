import * as React from 'react'
import * as village from './types'
import {Agent} from '../../src/scripts/village/constants/Agent'
import CommandSelection from '../../src/scripts/village/components/organisms/CommandSelection'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Command/CommandSelection', module)
  .add('default', () => {
    const agents = [
      {
        id: '2',
        image: ImagePath.Agent.b,
        initial: 'B',
        name: Agent.b.en
      },
      {
        id: '3',
        image: ImagePath.Agent.c,
        initial: 'C',
        name: Agent.c.en
      },
      {
        id: '4',
        image: ImagePath.Agent.d,
        initial: 'D',
        name: Agent.d.en
      },
      {
        id: '5',
        image: ImagePath.Agent.e,
        initial: 'E',
        name: Agent.e.en
      },
      {
        id: '6',
        image: ImagePath.Agent.f,
        initial: 'F',
        name: Agent.f.en
      },
      {
        id: '7',
        image: ImagePath.Agent.g,
        initial: 'G',
        name: Agent.g.en
      },
      {
        id: '8',
        image: ImagePath.Agent.h,
        initial: 'H',
        name: Agent.h.en
      },
      {
        id: '9',
        image: ImagePath.Agent.i,
        initial: 'I',
        name: Agent.i.en
      },
      {
        id: '10',
        image: ImagePath.Agent.j,
        initial: 'J',
        name: Agent.j.en
      },
      {
        id: '11',
        image: ImagePath.Agent.k,
        initial: 'K',
        name: Agent.k.en
      },
      {
        id: '12',
        image: ImagePath.Agent.l,
        initial: 'L',
        name: Agent.l.en
      },
      {
        id: '13',
        image: ImagePath.Agent.m,
        initial: 'M',
        name: Agent.m.en
      },
      {
        id: '14',
        image: ImagePath.Agent.n,
        initial: 'N',
        name: Agent.n.en
      },
      {
        id: '15',
        image: ImagePath.Agent.o,
        initial: 'O',
        name: Agent.o.en
      }
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <CommandSelection
            agents={agents}
            descriptionId="CommandSelection.Description.noonVote.unfixed"
            fixed={false}
            handleSelectOption={id => action(`handleSelectOption id: ${id}`)}
            phase={village.Phase.noon}
          />
        </IntlProvider>
      </Provider>

    return story
  })
