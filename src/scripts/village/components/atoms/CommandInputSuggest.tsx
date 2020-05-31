import * as React from 'react'
import {State as SuggestState} from '../../reducers/suggest'
import {getText} from '../../util'
import {village} from '../../types'

interface Props {
  data: SuggestState['data']
  handleSuggestClick: (suggest: string) => void
  language: village.Language
  left: number
  selected: number
  suggestable: boolean
  top: number
}

export const CommandInputSuggest: React.FC<Props> = props => {
  const suggestable = props.data.length > 0 && props.suggestable
  const listRef = React.useRef<HTMLDivElement>(null)
  const selectedItemRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const listElem = listRef.current
    const itemElem = selectedItemRef.current

    if (
      listElem === null ||
      itemElem === null ||
      !suggestable
    ) {
      return
    }
    const offsetBottom = itemElem.offsetTop + itemElem.offsetHeight

    listElem.scrollTop = offsetBottom - listElem.clientHeight
  })

  if (!suggestable) {
    return null
  }
  const style = {
    left: props.left,
    top: props.top
  }

  const handleSuggestClick = (text: string) => () => {
    props.handleSuggestClick(text)
  }

  return (
    <div className="vi--command--input--suggest--container">
      <div
        className="vi--command--input--suggest--list"
        ref={listRef}
        style={style}
      >
        {
          props.data.map((item, index) => {
            const selected = index === props.selected
            const text = getText(
              {
                language: props.language,
                languageMap: item.name
              }
            )

            return (
              <div
                className={`vi--command--input--suggest--item ${selected ? 'selected' : ''}`}
                key={item.id}
                onClick={handleSuggestClick(text)}
                ref={selected ? selectedItemRef : null}
              >
                {text}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
CommandInputSuggest.displayName = 'CommandInputSuggest'
