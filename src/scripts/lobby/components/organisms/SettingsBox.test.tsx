import * as React from 'react'
import * as lobby from '../../types'
import SettingsBox, {PropName, Props} from './SettingsBox'
import {shallow} from 'enzyme'

describe('<SettingsBox />', () => {
  test('render', () => {
    const initialValue: Props['initialValue'] = {
      language: lobby.Language.en,
      userEmail: 'example@example.com',
      userName: 'userName'
    }
    const handleChangeLanguage = jest.fn()
    const handleChangeUserEmail = jest.fn()
    const handleChangeUserName = jest.fn()
    const handleChangeUserPassword = jest.fn()
    const handleSubmitLogout = jest.fn()
    const wrapper = shallow<SettingsBox>(
      <SettingsBox
        handleChangeLanguage={handleChangeLanguage}
        handleChangeUserEmail={handleChangeUserEmail}
        handleChangeUserName={handleChangeUserName}
        handleChangeUserPassword={handleChangeUserPassword}
        handleSubmitLogout={handleSubmitLogout}
        initialValue={initialValue}
      />
    )

    expect(wrapper.find('.lo--settings')).toHaveLength(1)
    expect(wrapper.find('.lo--settings--bucket')).toHaveLength(3)
    expect(wrapper.find('.lo--settings--bucket.danger')).toHaveLength(1)
    expect(wrapper.find('.lo--settings--bucket--form')).toHaveLength(6)
    expect(wrapper.find('.lo--settings--bucket--form.danger')).toHaveLength(2)
    expect(wrapper.state()).toStrictEqual(
      {
        language: {
          valid: false,
          value: initialValue.language
        },
        userEmail: {
          valid: false,
          value: initialValue.userEmail
        },
        userName: {
          valid: false,
          value: initialValue.userName
        },
        userPassword: {
          valid: false,
          value: ''
        }
      }
    )
    expect(handleChangeLanguage).toHaveBeenCalledTimes(0)
    expect(handleChangeUserEmail).toHaveBeenCalledTimes(0)
    expect(handleChangeUserName).toHaveBeenCalledTimes(0)
    expect(handleChangeUserPassword).toHaveBeenCalledTimes(0)
    expect(handleSubmitLogout).toHaveBeenCalledTimes(0)
  })
  describe('handleChange', () => {
    describe('language', () => {
      test('valid: true, value: en', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.language)(true)(lobby.Language.en)

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: true,
              value: lobby.Language.en
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: true, value: ja', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.language)(true)(lobby.Language.en)

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: lobby.Language.en
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: en', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.language)(false)(lobby.Language.en)

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: lobby.Language.en
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: ja', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.language)(false)(lobby.Language.en)

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: lobby.Language.en
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
    })
    describe('userEmail', () => {
      test('valid: true, value: another@example.com', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userEmail)(true)('another@example.com')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: true,
              value: 'another@example.com'
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: true, value: example@example.com', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userEmail)(true)('example@example.com')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: another@example.com', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userEmail)(false)('another@example.com')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: 'another@example.com'
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: example@example.com', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userEmail)(false)('example@example.com')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
    })
    describe('userName', () => {
      test('valid: true, value: anotherUserName', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userName)(true)('anotherUserName')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: true,
              value: 'anotherUserName'
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: true, value: userName', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userName)(true)('userName')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: anotherUserName', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userName)(false)('anotherUserName')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: 'anotherUserName'
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: userName', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userName)(false)('userName')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
    })
    describe('userPassword', () => {
      test('valid: true, value: userPassword', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userPassword)(true)('userPassword')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: true,
              value: 'userPassword'
            }
          }
        )
      })
      test('valid: true, value: \'\'', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userPassword)(true)('')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
      test('valid: false, value: userPassword', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userPassword)(false)('userPassword')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: 'userPassword'
            }
          }
        )
      })
      test('valid: false, value: \'\'', () => {
        const initialValue: Props['initialValue'] = {
          language: lobby.Language.en,
          userEmail: 'example@example.com',
          userName: 'userName'
        }
        const handleChangeLanguage = jest.fn()
        const handleChangeUserEmail = jest.fn()
        const handleChangeUserName = jest.fn()
        const handleChangeUserPassword = jest.fn()
        const handleSubmitLogout = jest.fn()
        const wrapper = shallow<SettingsBox>(
          <SettingsBox
            handleChangeLanguage={handleChangeLanguage}
            handleChangeUserEmail={handleChangeUserEmail}
            handleChangeUserName={handleChangeUserName}
            handleChangeUserPassword={handleChangeUserPassword}
            handleSubmitLogout={handleSubmitLogout}
            initialValue={initialValue}
          />
        )

        wrapper.instance().handleChange(PropName.userPassword)(false)('')

        expect(wrapper.state()).toStrictEqual(
          {
            language: {
              valid: false,
              value: initialValue.language
            },
            userEmail: {
              valid: false,
              value: initialValue.userEmail
            },
            userName: {
              valid: false,
              value: initialValue.userName
            },
            userPassword: {
              valid: false,
              value: ''
            }
          }
        )
      })
    })
  })
  test('handleSubmit', () => {
    const initialValue: Props['initialValue'] = {
      language: lobby.Language.en,
      userEmail: 'example@example.com',
      userName: 'userName'
    }
    const handleChangeLanguage = jest.fn()
    const handleChangeUserEmail = jest.fn()
    const handleChangeUserName = jest.fn()
    const handleChangeUserPassword = jest.fn()
    const handleSubmitLogout = jest.fn()
    const wrapper = shallow<SettingsBox>(
      <SettingsBox
        handleChangeLanguage={handleChangeLanguage}
        handleChangeUserEmail={handleChangeUserEmail}
        handleChangeUserName={handleChangeUserName}
        handleChangeUserPassword={handleChangeUserPassword}
        handleSubmitLogout={handleSubmitLogout}
        initialValue={initialValue}
      />
    )

    wrapper.find('.lo--settings--bucket--form').forEach(node => {
      node.simulate('submit', {
        preventDefault: jest.fn()
      })
    })
    expect(handleChangeLanguage).toHaveBeenCalledTimes(1)
    expect(handleChangeLanguage).toHaveBeenCalledWith(initialValue.language)
    expect(handleChangeUserEmail).toHaveBeenCalledTimes(1)
    expect(handleChangeUserEmail).toHaveBeenCalledWith(initialValue.userEmail)
    expect(handleChangeUserName).toHaveBeenCalledTimes(1)
    expect(handleChangeUserName).toHaveBeenCalledWith(initialValue.userName)
    expect(handleChangeUserPassword).toHaveBeenCalledTimes(1)
    expect(handleChangeUserPassword).toHaveBeenCalledWith('')
    expect(handleSubmitLogout).toHaveBeenCalledTimes(1)
  })
})
