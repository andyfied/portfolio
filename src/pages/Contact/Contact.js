import React from 'react'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Small from './small/Small'
import Large from './large/Large'

const Contact = () => (
  <div>
    <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
      <Small />
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
      <Large />
    </MediaQuery>
  </div>
)

export default Contact
