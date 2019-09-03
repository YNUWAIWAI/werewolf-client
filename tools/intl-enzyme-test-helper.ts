import * as React from 'react'
import * as lobby from 'types/lobby'
import * as village from 'types/village'
import {IntlProvider, intlShape} from 'react-intl'
import {MountRendererProps, ShallowRendererProps, mount, shallow} from 'enzyme'
import {Language} from '../src/i18n/landing'

export const initRenderer = (locale: lobby.Language | village.Language | Language, messages: {[key: string]: string}) => {
  const intlProvider = new IntlProvider(
    {
      locale,
      messages
    },
    {}
  )
  const {intl} = intlProvider.getChildContext()
  const nodeWithIntlProp = (node: React.ReactElement) => React.cloneElement(
    node,
    {
      intl
    }
  )

  return {
    mountWithIntl: <C extends React.Component>(node: React.ReactElement<any>, {context, childContextTypes, ... additionalOptions}: MountRendererProps = {}) => mount<C>(
      nodeWithIntlProp(node),
      {
        childContextTypes: {
          intl: intlShape,
          ... childContextTypes
        },
        context: {
          ... context,
          intl
        },
        ... additionalOptions
      }
    ),
    shallowWithIntl: <C extends React.Component>(node: React.ReactElement<any>, {context, ... additionalOptions}: ShallowRendererProps = {}) => shallow<C>(
      nodeWithIntlProp(node),
      {
        context: {
          ... context,
          intl
        },
        ... additionalOptions
      }
    )
  }
}

