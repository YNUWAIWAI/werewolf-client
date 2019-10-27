import * as React from 'react'
import * as village from './types'
import Result, {Props} from '../../src/scripts/village/components/organisms/Result'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Result', module)
  .add('15 players', () => {
    const characters: Props['characters'] = {
      character1: {
        avatarImage: ImagePath.Character.o,
        avatarName: 'Suzuki',
        characterId: '1',
        characterImage: ImagePath.Character.a,
        characterInitial: 'A',
        characterName: 'Adil',
        result: village.Result.win,
        roleImage: ImagePath.Role.seer,
        roleName: 'Seer',
        status: village.CharacterStatus.alive
      },
      character2: {
        avatarImage: ImagePath.Character.i,
        avatarName: 'Takahashi',
        characterId: '2',
        characterImage: ImagePath.Character.b,
        characterInitial: 'B',
        characterName: 'Borya',
        result: village.Result.lose,
        roleImage: ImagePath.Role.werewolf,
        roleName: 'Werewolf',
        status: village.CharacterStatus.alive
      },
      character3: {
        avatarImage: ImagePath.Character.r,
        avatarName: 'Tanaka',
        characterId: '3',
        characterImage: ImagePath.Character.c,
        characterInitial: 'C',
        characterName: 'Chacha',
        result: village.Result.win,
        roleImage: ImagePath.Role.hunter,
        roleName: 'Hunter',
        status: village.CharacterStatus.alive
      },
      character4: {
        avatarImage: ImagePath.Character.f,
        avatarName: 'Ito',
        characterId: '4',
        characterImage: ImagePath.Character.d,
        characterInitial: 'D',
        characterName: 'Devdatta',
        result: village.Result.win,
        roleImage: ImagePath.Role.madman,
        roleName: 'Medium',
        status: village.CharacterStatus.alive
      },
      character5: {
        avatarImage: ImagePath.Character.s,
        avatarName: 'Watanabe',
        characterId: '5',
        characterImage: ImagePath.Character.e,
        characterInitial: 'E',
        characterName: 'Ekrem',
        result: village.Result.lose,
        roleImage: ImagePath.Role.werehamster,
        roleName: 'Werehamster',
        status: village.CharacterStatus.deathByFear
      },
      character6: {
        avatarImage: ImagePath.Character.n,
        avatarName: 'Yamamoto',
        characterId: '6',
        characterImage: ImagePath.Character.f,
        characterInitial: 'F',
        characterName: 'Fernando',
        result: village.Result.lose,
        roleImage: ImagePath.Role.madman,
        roleName: 'Madman',
        status: village.CharacterStatus.deathByExecution
      },
      character7: {
        avatarImage: ImagePath.Character.e,
        avatarName: 'Nakamura',
        characterId: '7',
        characterImage: ImagePath.Character.g,
        characterInitial: 'G',
        characterName: 'Gavriil',
        result: village.Result.lose,
        roleImage: ImagePath.Role.werewolf,
        roleName: 'Werewolf',
        status: village.CharacterStatus.unnaturalDeath
      },
      character8: {
        avatarImage: ImagePath.Character.g,
        avatarName: 'Kobayashi',
        characterId: '8',
        characterImage: ImagePath.Character.h,
        characterInitial: 'H',
        characterName: 'Henrik',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.unnaturalDeath
      },
      character9: {
        avatarImage: ImagePath.Character.g,
        avatarName: 'Yoshida',
        characterId: '9',
        characterImage: ImagePath.Character.i,
        characterInitial: 'I',
        characterName: 'Ileanna',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.unnaturalDeath
      },
      character10: {
        avatarImage: ImagePath.Character.t,
        avatarName: 'Yamada',
        characterId: '10',
        characterImage: ImagePath.Character.j,
        characterInitial: 'J',
        characterName: 'Jasmin',
        result: village.Result.win,
        roleImage: ImagePath.Role.mason,
        roleName: 'Mason',
        status: village.CharacterStatus.unnaturalDeath
      },
      character11: {
        avatarImage: ImagePath.Character.c,
        avatarName: 'Sasaki',
        characterId: '11',
        characterImage: ImagePath.Character.k,
        characterInitial: 'K',
        characterName: 'Kaiji',
        result: village.Result.win,
        roleImage: ImagePath.Role.mason,
        roleName: 'Mason',
        status: village.CharacterStatus.unnaturalDeath
      },
      character12: {
        avatarImage: ImagePath.Character.k,
        avatarName: 'Yamaguchi',
        characterId: '12',
        characterImage: ImagePath.Character.l,
        characterInitial: 'L',
        characterName: 'Louise',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.deathByAttack
      },
      character13: {
        avatarImage: ImagePath.Character.l,
        avatarName: 'Matsumoto',
        characterId: '13',
        characterImage: ImagePath.Character.m,
        characterInitial: 'M',
        characterName: 'Marthe',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.alive
      },
      character14: {
        avatarImage: ImagePath.Character.j,
        avatarName: 'Inoue',
        characterId: '14',
        characterImage: ImagePath.Character.n,
        characterInitial: 'N',
        characterName: 'Nanyamka',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.alive
      },
      character15: {
        avatarImage: ImagePath.Character.e,
        avatarName: 'Sato',
        characterId: '15',
        characterImage: ImagePath.Character.o,
        characterInitial: 'O',
        characterName: 'Oliwia',
        result: village.Result.win,
        roleImage: ImagePath.Role.villager,
        roleName: 'Villager',
        status: village.CharacterStatus.alive
      }
    }
    const losers: Props['losers'] = [
      'character2',
      'character5',
      'character6',
      'character7'
    ]
    const me: Props['me'] = 'character1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'character1',
      'character3',
      'character4',
      'character8',
      'character9',
      'character10',
      'character11',
      'character12',
      'character13',
      'character14',
      'character15'
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
          <Result
            characters={characters}
            handleClickCloseButton={action('handleCloseClick')}
            losers={losers}
            me={me}
            summary={summary}
            visible
            winners={winners}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('5 players', () => {
    const characters: Props['characters'] = {
      character1: {
        avatarImage: ImagePath.Character.o,
        avatarName: 'Suzuki',
        characterId: '1',
        characterImage: ImagePath.Character.a,
        characterInitial: 'A',
        characterName: 'Adil',
        result: village.Result.win,
        roleImage: ImagePath.Role.seer,
        roleName: 'Seer',
        status: village.CharacterStatus.alive
      },
      character2: {
        avatarImage: ImagePath.Character.i,
        avatarName: 'Takahashi',
        characterId: '2',
        characterImage: ImagePath.Character.b,
        characterInitial: 'B',
        characterName: 'Borya',
        result: village.Result.lose,
        roleImage: ImagePath.Role.werewolf,
        roleName: 'Werewolf',
        status: village.CharacterStatus.deathByExecution
      },
      character3: {
        avatarImage: ImagePath.Character.r,
        avatarName: 'Tanaka',
        characterId: '3',
        characterImage: ImagePath.Character.c,
        characterInitial: 'C',
        characterName: 'Chacha',
        result: village.Result.win,
        roleImage: ImagePath.Role.hunter,
        roleName: 'Hunter',
        status: village.CharacterStatus.alive
      },
      character4: {
        avatarImage: ImagePath.Character.f,
        avatarName: 'Ito',
        characterId: '4',
        characterImage: ImagePath.Character.d,
        characterInitial: 'D',
        characterName: 'Devdatta',
        result: village.Result.win,
        roleImage: ImagePath.Role.madman,
        roleName: 'Medium',
        status: village.CharacterStatus.deathByExecution
      },
      character5: {
        avatarImage: ImagePath.Character.s,
        avatarName: 'Watanabe',
        characterId: '5',
        characterImage: ImagePath.Character.e,
        characterInitial: 'E',
        characterName: 'Ekrem',
        result: village.Result.lose,
        roleImage: ImagePath.Role.werehamster,
        roleName: 'Werehamster',
        status: village.CharacterStatus.deathByFear
      }
    }
    const losers: Props['losers'] = [
      'character2',
      'character5'
    ]
    const me: Props['me'] = 'character1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'character1',
      'character3',
      'character4'
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
          <Result
            characters={characters}
            handleClickCloseButton={action('handleCloseClick')}
            losers={losers}
            me={me}
            summary={summary}
            visible
            winners={winners}
          />
        </IntlProvider>
      </Provider>

    return story
  })
