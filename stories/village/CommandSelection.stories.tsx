import * as React from 'react'
import {Character} from '../../src/scripts/village/constants/Character'
import CommandSelection from '../../src/scripts/village/components/organisms/CommandSelection'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'
import {village} from './types'

storiesOf('village|Command/CommandSelection', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
  .add('default', () => {
    const characters = [
      {
        id: '2',
        image: ImagePath.Character.b,
        initial: 'B',
        name: Character.b.en
      },
      {
        id: '3',
        image: ImagePath.Character.c,
        initial: 'C',
        name: Character.c.en
      },
      {
        id: '4',
        image: ImagePath.Character.d,
        initial: 'D',
        name: Character.d.en
      },
      {
        id: '5',
        image: ImagePath.Character.e,
        initial: 'E',
        name: Character.e.en
      },
      {
        id: '6',
        image: ImagePath.Character.f,
        initial: 'F',
        name: Character.f.en
      },
      {
        id: '7',
        image: ImagePath.Character.g,
        initial: 'G',
        name: Character.g.en
      },
      {
        id: '8',
        image: ImagePath.Character.h,
        initial: 'H',
        name: Character.h.en
      },
      {
        id: '9',
        image: ImagePath.Character.i,
        initial: 'I',
        name: Character.i.en
      },
      {
        id: '10',
        image: ImagePath.Character.j,
        initial: 'J',
        name: Character.j.en
      },
      {
        id: '11',
        image: ImagePath.Character.k,
        initial: 'K',
        name: Character.k.en
      },
      {
        id: '12',
        image: ImagePath.Character.l,
        initial: 'L',
        name: Character.l.en
      },
      {
        id: '13',
        image: ImagePath.Character.m,
        initial: 'M',
        name: Character.m.en
      },
      {
        id: '14',
        image: ImagePath.Character.n,
        initial: 'N',
        name: Character.n.en
      },
      {
        id: '15',
        image: ImagePath.Character.o,
        initial: 'O',
        name: Character.o.en
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
            characters={characters}
            descriptionId="CommandSelection.Description.noonVote.unfixed"
            fixed={false}
            handleSelectOption={id => () => console.log(`handleSelectOption id: ${id}`)}
            phase={village.Phase.noon}
          />
        </IntlProvider>
      </Provider>

    return story
  })
