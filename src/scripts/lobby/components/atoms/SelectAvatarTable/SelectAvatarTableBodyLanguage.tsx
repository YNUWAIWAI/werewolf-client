import * as React from 'react'
import LanguageSelect from '../LanguageSelect'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleChange: (valid: boolean) => (value: lobby.Language) => void
  readonly handleSelect: () => void
  readonly language: lobby.Language
}

export default function SelectAvatarTableBodyLanguage(props: Props) {
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item language ${props.additionalClassName.join(' ')}`}
      onClick={handleSelect}
    >
      <LanguageSelect
        className="input"
        defaultValue={props.language}
        handleChange={props.handleChange}
        menuPosition="fixed"
      />
    </div>
  )
}
