import * as React from 'react'
import {
  ActionMeta,
  ValueType
} from 'react-select/src/types'
import Select from 'react-select'

export interface Option<T> {
  readonly label: string
  readonly value: T
}
export interface Props<T> {
  readonly className: string
  readonly defaultValue: ValueType<Option<T>>
  readonly isSearchable?: boolean
  readonly menuPosition?: 'absolute' | 'fixed'
  readonly onChange: (selectedOption: ValueType<Option<T>>, action: ActionMeta) => void
  readonly name: string
  readonly options: Option<T>[]
}

export default function CustomizedSelect(props: Props<any>) {
  return (
    <Select
      className={props.className}
      classNamePrefix="lo--react-select"
      defaultValue={props.defaultValue}
      isSearchable={props.isSearchable}
      menuPosition={props.menuPosition}
      name={props.name}
      onChange={props.onChange}
      options={props.options}
      theme={theme => ({
        ... theme,
        colors: {
          ... theme.colors,
          neutral0: 'var(--color--neutral0)',
          neutral5: 'var(--color--neutral5)',
          neutral10: 'var(--color--neutral10)',
          neutral20: 'var(--color--neutral20)',
          neutral30: 'var(--color--neutral30)',
          neutral40: 'var(--color--neutral40)',
          neutral50: 'var(--color--neutral50)',
          neutral60: 'var(--color--neutral60)',
          neutral70: 'var(--color--neutral70)',
          neutral80: 'var(--color--neutral80)',
          neutral90: 'var(--color--neutral90)',
          primary: 'var(--color--primary)',
          primary25: 'var(--color--primary25)',
          primary50: 'var(--color--primary50)',
          // primary75: 'var(--color--primary75)',
          text: 'var(--font-color)',
        }
      })}
    />
  )
}
