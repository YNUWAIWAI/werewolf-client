import {IntlProvider, addLocaleData, intlShape} from 'react-intl'
import {mount, shallow} from 'enzyme'
import React from 'react'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'
import ja from 'react-intl/locale-data/ja'

addLocaleData([... en, ... fr, ... it, ... ja])

export const initRenderer = (locale, messages) => {
  const intlProvider = new IntlProvider(
    {
      locale,
      messages
    },
    {}
  )
  const {intl} = intlProvider.getChildContext()
  const nodeWithIntlProp = node =>
    React.cloneElement(
      node,
      {
        intl
      }
    )

  return {
    mountWithIntl: (node, {context, childContextTypes, ... additionalOptions} = {}) =>
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
    shallowWithIntl: (node, {context, ... additionalOptions} = {}) =>
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

