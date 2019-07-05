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

class _Pricing extends Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={breakpoints.MOBILE_BREAKPOINT}>
          <Small />
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.DESKTOP_BREAKPOINT}>
          <Large />
        </MediaQuery>
      </div>
    )
  }
}

const Pricing = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Pricing)

export default Pricing
