import * as React from 'react'
import {Close} from '../atoms/svg/Close'
import {FormattedMessage} from 'react-intl'
import {convertImageUrl} from '../../util'

export interface StateProps {
  readonly selectedImage: string
  readonly imageList: string[]
}
export interface DispatchProps {
  readonly handleCloseButtonClick: () => void
  readonly handleImageSelect: (image: string) => void
}
export type Props = StateProps & DispatchProps

export const AvatarImageSelect: React.FC<Props> = props => (
  <div className="lo--avatar-image-select">
    <button
      className="lo--avatar-image-select--close"
      onClick={() => props.handleCloseButtonClick()}
    >
      <Close />
    </button>
    <div
      className="lo--avatar-image-select--description"
    >
      <FormattedMessage
        id="AvatarImageSelect.description"
      />
    </div>
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
AvatarImageSelect.displayName = 'AvatarImageSelect'
