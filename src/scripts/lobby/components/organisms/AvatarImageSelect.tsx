import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {convertImageUrl} from '../../util'

export interface StateProps {
  readonly selectedImage: string
  readonly imageList: string[]
}
export interface DispatchProps {
  readonly handleImageSelect: (image: string) => void
}
export type Props = StateProps & DispatchProps

export default function AvatarImageSelect(props: Props) {
  return (
    <div className="lo--avatar-image-select">
      <FormattedMessage
        id="AvatarImageSelect.description"
      >
        {
          text => (
            <div
              className="lo--avatar-image-select--description"
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <div
        className="lo--avatar-image-select--image-list"
      >
        {
          props.imageList
            .map(image => (
              <div
                className="lo--avatar-image-select--image-list--item"
                key={image}
              >
                <img
                  className={`lo--avatar-image-select--image-list--item--image ${image === props.selectedImage ? 'selected' : ''}`}
                  onClick={() => props.handleImageSelect(image)}
                  src={convertImageUrl(image)}
                />
              </div>
            ))
        }
      </div>
    </div>
  )
}
