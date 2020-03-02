import * as React from 'react'
import {AvatarImageList} from '../../constants/AvatarImageList'
import {FormattedMessage} from 'react-intl'
import {convertImageUrl} from '../../util'

export interface StateProps {
  selectedImage: string
  imageList: string[]
}
export interface DispatchProps {
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
          AvatarImageList
            .map(image => (
              <div
                className="lo--avatar-image-select--image-list--item"
                key={image}
              >
                <img
                  src={convertImageUrl(image)}
                />
              </div>
            ))
        }
      </div>
    </div>
  )
}
