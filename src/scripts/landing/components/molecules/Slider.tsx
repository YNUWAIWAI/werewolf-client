import * as React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {News} from '../atoms/Slider/News'
import {Title} from '../atoms/Slider/Title'
import {Trailer} from '../atoms/Slider/Trailer'

export const Slider: React.FC<{}> = () => (
  <Carousel
    autoPlay
    className="la--slider"
    infiniteLoop
    showArrows
    showIndicators
    showStatus={false}
    showThumbs={false}
    stopOnHover
    swipeable
  >
    <Title />
    <Trailer
      autoPlay={false}
    />
    <News
      link=""
      title="news1"
    />
  </Carousel>
)
Slider.displayName = 'Slider'
