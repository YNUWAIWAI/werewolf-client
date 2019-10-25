import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import IntlProviderContainer from './IntlProviderContainer'
import Modal from '../components/organisms/Modal'
import ModalContainer from './ModalContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<ModalContainer />', () => {
  describe('render', () => {
    describe('selectedAgent exists', () => {
      test('DAY', () => {
        const store = fakeStore(
          {
            base: {
              '@id': 'https://licos.online/state/0.2/village#3',
              'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
              'day': 1,
              'intensionalDisclosureRange': village.Channel.private,
              'phase': village.Phase.noon,
              'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
              'phaseTimeLimit': 100,
              'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
              'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
              'village': {
                '@id': 'https://licos.online/state/0.2/village',
                'chatSettings': {
                  maxLengthOfUnicodeCodePoints: 140,
                  maxNumberOfChatMessages: 10
                },
                'id': 3,
                'lang': village.Language.en,
                'name': '横国の森の奥にある時代に取り残された小さな村',
                'totalNumberOfCharacters': 15
              }
            },
            commandSelection: {
              allIds: [
                '2',
                '3',
                '4'
              ],
              byId: {
                '2': {
                  '@id': 'https://licos.online/state/0.2/village#3/character#2',
                  'id': '2',
                  'image': ImagePath.Agent.b,
                  'name': Agent.b
                },
                '3': {
                  '@id': 'https://licos.online/state/0.2/village#3/character#3',
                  'id': '3',
                  'image': ImagePath.Agent.c,
                  'name': Agent.c
                },
                '4': {
                  '@id': 'https://licos.online/state/0.2/village#3/character#4',
                  'id': '4',
                  'image': ImagePath.Agent.d,
                  'name': Agent.d
                }
              },
              fixed: false
            },
            language: village.Language.en,
            mine: {
              character: {
                '@id': 'https://licos.online/state/0.2/village#3/character#1',
                'id': 1,
                'image': ImagePath.Agent.a,
                'name': Agent.a
              },
              role: {
                '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                'id': village.RoleId.seer,
                'image': ImagePath.Role.seer,
                'name': Role.seer
              }
            },
            modal: {
              id: '2',
              visible: true
            }
          }
        )
        const wrapper = mount(
          <Provider store={store} >
            <IntlProviderContainer>
              <ModalContainer />
            </IntlProviderContainer>
          </Provider>
        )

        expect(wrapper.html()).toMatchSnapshot()
      })
      describe('NIGHT', () => {
        test('HUNTER', () => {
          const store = fakeStore(
            {
              base: {
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': 'https://licos.online/state/0.2/village#3/character#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                  'id': village.RoleId.seer,
                  'image': ImagePath.Role.seer,
                  'name': Role.seer
                }
              },
              modal: {
                id: '2',
                visible: true
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <ModalContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('SEER', () => {
          const store = fakeStore(
            {
              base: {
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                character: {
                  '@id': 'https://licos.online/state/0.2/village#3/character#1',
                  'id': 1,
                  'image': ImagePath.Agent.a,
                  'name': Agent.a
                },
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#seer',
                  'id': village.RoleId.seer,
                  'image': ImagePath.Role.seer,
                  'name': Role.seer
                }
              },
              modal: {
                id: '2',
                visible: true
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <ModalContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('WEREWOLF', () => {
          const store = fakeStore(
            {
              base: {
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
                  'id': village.RoleId.werewolf,
                  'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
                  'name': Role.werewolf
                }
              },
              modal: {
                id: '2',
                visible: true
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <ModalContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
        test('VILLAGER(default)', () => {
          const store = fakeStore(
            {
              base: {
                '@id': 'https://licos.online/state/0.2/village#3',
                'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
                'day': 1,
                'intensionalDisclosureRange': village.Channel.private,
                'phase': village.Phase.night,
                'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
                'phaseTimeLimit': 100,
                'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
                'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
                'village': {
                  '@id': 'https://licos.online/state/0.2/village',
                  'chatSettings': {
                    maxLengthOfUnicodeCodePoints: 140,
                    maxNumberOfChatMessages: 10
                  },
                  'id': 3,
                  'lang': village.Language.en,
                  'name': '横国の森の奥にある時代に取り残された小さな村',
                  'totalNumberOfCharacters': 15
                }
              },
              commandSelection: {
                allIds: [
                  '2',
                  '3',
                  '4'
                ],
                byId: {
                  '2': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#2',
                    'id': '2',
                    'image': ImagePath.Agent.b,
                    'name': Agent.b
                  },
                  '3': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#3',
                    'id': '3',
                    'image': ImagePath.Agent.c,
                    'name': Agent.c
                  },
                  '4': {
                    '@id': 'https://licos.online/state/0.2/village#3/character#4',
                    'id': '4',
                    'image': ImagePath.Agent.d,
                    'name': Agent.d
                  }
                },
                fixed: false
              },
              language: village.Language.en,
              mine: {
                role: {
                  '@id': 'https://licos.online/state/0.2/village#3/role#villager',
                  'id': village.RoleId.villager,
                  'image': ImagePath.Role.villager,
                  'name': Role.villager
                }
              },
              modal: {
                id: '2',
                visible: true
              }
            }
          )
          const wrapper = mount(
            <Provider store={store} >
              <IntlProviderContainer>
                <ModalContainer />
              </IntlProviderContainer>
            </Provider>
          )

          expect(wrapper.html()).toMatchSnapshot()
        })
      })
    })
    test('selectedAgent doesn\'t exist', () => {
      const store = fakeStore(
        {
          base: {
            '@id': 'https://licos.online/state/0.2/village#3',
            'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
            'day': 1,
            'intensionalDisclosureRange': village.Channel.private,
            'phase': village.Phase.noon,
            'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
            'phaseTimeLimit': 100,
            'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
            'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
            'village': {
              '@id': 'https://licos.online/state/0.2/village',
              'chatSettings': {
                maxLengthOfUnicodeCodePoints: 140,
                maxNumberOfChatMessages: 10
              },
              'id': 3,
              'lang': village.Language.en,
              'name': '横国の森の奥にある時代に取り残された小さな村',
              'totalNumberOfCharacters': 15
            }
          },
          commandSelection: {
            allIds: [
              '2',
              '3',
              '4'
            ],
            byId: {
              '2': {
                '@id': 'https://licos.online/state/0.2/village#3/character#2',
                'id': '2',
                'image': ImagePath.Agent.b,
                'name': Agent.b
              },
              '3': {
                '@id': 'https://licos.online/state/0.2/village#3/character#3',
                'id': '3',
                'image': ImagePath.Agent.c,
                'name': Agent.c
              },
              '4': {
                '@id': 'https://licos.online/state/0.2/village#3/character#4',
                'id': '4',
                'image': ImagePath.Agent.d,
                'name': Agent.d
              }
            },
            fixed: false
          },
          language: village.Language.en,
          modal: {
            id: '',
            visible: true
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  test('handleClickNo', () => {
    const store = fakeStore(
      {
        language: village.Language.en
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ModalContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Modal).props().handleClickNo()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.SELECT_NO
    })
  })
  test('handleClickYes', () => {
    const store = fakeStore(
      {
        language: village.Language.en
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ModalContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const characterId = '4'

    wrapper.find(Modal).props().handleClickYes(characterId)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      characterId,
      type: ActionTypes.global.SELECT_YES
    })
  })
})
