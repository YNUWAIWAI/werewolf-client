// @flow
/* eslint react/forbid-component-props: 0 */
import React, {Fragment} from 'react'
import Select from 'react-select'

export type Props = {
  checked: boolean,
  handleChange: SyntheticInputEvent<HTMLInputElement> => void,
  handleClick: SyntheticInputEvent<HTMLInputElement> => void,
  id: string,
  max: number,
  min: number,
  name: string,
  placeholder: string,
  type: 'number' | 'text' | 'textarea',
  validity: boolean
} | {
  checked: boolean,
  handleChange: SyntheticInputEvent<HTMLInputElement> => void,
  handleClick: SyntheticInputEvent<HTMLInputElement> => void,
  id: string,
  name: string,
  type: 'select',
  validity: boolean
}

export default function AdvancedSearchBoxRow(props: Props) {
  const InputElem = () => {
    switch (props.type) {
      case 'number':
        return (
          <input
            className="advanced-search--input"
            max={props.max}
            min={props.min}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            type={props.type}
          />
        )
      case 'select': {
        const options = [
          {
            label: 'Random',
            value: 'random'
          },
          {
            label: 'Fixed',
            value: 'fixed'
          },
          {
            label: 'Unspecified',
            value: 'unspecified'
          }
        ]

        return (
          <Select
            className="advanced-search--input"
            classNamePrefix="react-select"
            defaultValue={options[0]}
            name="avatar"
            onChange={props.handleChange}
            options={options}
          />
        )
      }
      case 'text':
        return (
          <input
            className="advanced-search--input"
            maxLength={props.max}
            minLength={props.min}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            type={props.type}
          />
        )
      case 'textarea':
        return (
          <textarea
            className="advanced-search--input"
            maxLength={props.max}
            minLength={props.min}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            rows="3"
          />
        )
      default:
        throw Error(`Unknown type: ${props.type}`)
    }
  }

  return (
    <Fragment>
      <div className="advanced-search--prop">
        <input
          checked={props.checked}
          disabled={!props.validity}
          id={props.id}
          onClick={props.handleClick}
          type="checkbox"
        />
        <label htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <InputElem />
    </Fragment>
  )
}
