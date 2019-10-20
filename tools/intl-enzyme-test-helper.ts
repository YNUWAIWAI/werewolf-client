import * as React from 'react'
import * as lobby from '../types/lobby'
import * as village from '../types/village'
import {MountRendererProps, ShallowRendererProps, mount, shallow} from 'enzyme'
import {IntlProvider} from 'react-intl'
import {Language} from '../src/i18n/landing'

const defaultLocale = 'en'

export const initRenderer = (locale: lobby.Language | village.Language | Language, messages: {[key: string]: string}) => ({
  mountWithIntl: <C extends React.Component>(node: React.ReactElement): MountRendererProps => mount<C>(
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
  shallowWithIntl: <C extends React.Component>(node: React.ReactElement): ShallowRendererProps => shallow<C>(
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
