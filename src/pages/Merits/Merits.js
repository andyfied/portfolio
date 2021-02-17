import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import breakpoints from '../../constants/breakpoints'

import Small from './small/Small'
import Large from './large/Large'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const _Merits = () => (
  <div>
    <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
      <Small />
    </MediaQuery>
    <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
      <Large />
    </MediaQuery>
  </div>
)

const Merits = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Merits)

export default Merits
