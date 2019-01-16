/* eslint no-unused-vars: 0 */
/// <reference types="lobby" />
import * as React from 'react'
import {IntlProvider, intlShape} from 'react-intl'
import {MountRendererProps, ShallowRendererProps, mount, shallow} from 'enzyme'

export const initRenderer = (locale: lobby.Language | village.Language, messages: {[key: string]: string}) => {
  const intlProvider = new IntlProvider(
    {
      locale,
      messages
    },
    {}
  )
  const {intl} = intlProvider.getChildContext()
  const nodeWithIntlProp = (node: React.ReactElement<any>) =>
    React.cloneElement(
      node,
      {
        intl
      }
    )

  return {
    mountWithIntl: (node: React.ReactElement<any>, {context, childContextTypes, ... additionalOptions}: MountRendererProps = {}) =>
      mount(
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
    shallowWithIntl: (node: React.ReactElement<any>, {context, ... additionalOptions}: ShallowRendererProps = {}) =>
      shallow(
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

