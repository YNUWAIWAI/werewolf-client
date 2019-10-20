import * as React from 'react'
import * as lobby from '../types/lobby'
import * as village from '../types/village'
import {mount, shallow} from 'enzyme'
import {IntlProvider} from 'react-intl'
import {Language} from '../src/i18n/landing'

const defaultLocale = 'en'

export const initRenderer = (locale: lobby.Language | village.Language | Language, messages: {[key: string]: string}) => ({
  mountWithIntl: (node: React.ReactElement) => mount(
    node,
    {
      wrappingComponent: IntlProvider,
      wrappingComponentProps: {
        defaultLocale,
        locale,
        messages
      }
    }
  ),
  shallowWithIntl: (node: React.ReactElement) => shallow(
    node,
    {
      wrappingComponent: IntlProvider,
      wrappingComponentProps: {
        defaultLocale,
        locale,
        messages
      }
    }
  )
})
