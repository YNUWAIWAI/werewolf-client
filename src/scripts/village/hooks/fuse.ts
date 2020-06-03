import * as React from 'react'
import Fuse from 'fuse.js'
import {SuggestedData} from '../reducers/suggest'

export const useFuse = (initialData: SuggestedData[]) => {
  const [text, setText] = React.useState('')
  const options: Fuse.IFuseOptions<SuggestedData> = {
    distance: 100,
    keys: [
      'id',
      'name.en',
      'name.fr',
      'name.it',
      'name.ja'
    ],
    location: 0,
    minMatchCharLength: 1,
    shouldSort: true,
    threshold: 0.6
  }
  const fuse = new Fuse(initialData, options)
  const suggestedResult = React.useMemo(() => {
    if (text === '') {
      return initialData
    }

    return fuse.search<SuggestedData>(text)
      .map(result => result.item)
  }, [fuse, initialData, text])
  const updateSearchText = (searchText: string) => {
    setText(searchText)
  }

  return {
    suggestedResult,
    updateSearchText
  }
}
