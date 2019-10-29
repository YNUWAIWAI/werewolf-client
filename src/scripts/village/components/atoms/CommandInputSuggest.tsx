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

export default class CommandInputSuggest extends React.Component<Props, {}> {
  public componentDidUpdate() {
    const listElem = this.listRef.current
    const itemElem = this.itemsRef[this.props.selected]

    if (
      listElem === null ||
      typeof itemElem === 'undefined' ||
      this.props.data.length <= 0 ||
      !this.props.suggestable
    ) {
      return
    }
    const offsetBottom = itemElem.offsetTop + itemElem.offsetHeight

    listElem.scrollTop = offsetBottom - listElem.clientHeight
  }

  private listRef = React.createRef<HTMLDivElement>()

  private itemsRef: HTMLDivElement[] = []

  public render() {
    if (this.props.data.length <= 0 || !this.props.suggestable) {
      return null
    }
    this.itemsRef = []
    const style = {
      left: this.props.left,
      top: this.props.top
    }

    return (
      <div className="vi--command--input--suggest--container">
        <div
          className="vi--command--input--suggest--list"
          ref={this.listRef}
          style={style}
        >
          {
            this.props.data.map((item, index) => (
              <div
                className={`vi--command--input--suggest--item ${index === this.props.selected ? 'selected' : ''}`}
                key={item.id}
                onClick={() => this.props.handleSuggestClick(
                  getText(
                    {
                      language: this.props.language,
                      languageMap: item.name
                    }
                  )
                )}
                ref={instance => {
                  if (instance !== null) {
                    this.itemsRef = [... this.itemsRef, instance]
                  }
                }}
              >
                {
                  getText(
                    {
                      language: this.props.language,
                      languageMap: item.name
                    }
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

